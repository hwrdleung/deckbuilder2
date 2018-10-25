import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {

  constructor(private data: DataService) { }


  ngOnInit() {
    this.enableSandboxResizer();
  }

  enableSandboxResizer() {
    let startResize = () => {
      document.addEventListener('mousemove', this.resizeGrid);
      document.addEventListener('mouseup', stopResize);
    }

    let stopResize = () => {
      document.removeEventListener('mousemove', this.resizeGrid);
      document.removeEventListener('mouseup', stopResize);
    }

    let resizer = document.getElementById('sandbox-resizer');
    if (resizer) {
      resizer.addEventListener('mousedown', startResize);
    }
  }

  resizeGrid = (e) => {
    let sandboxContainer = document.getElementById('sandbox-container');
    let resizer = document.getElementById('sandbox-resizer');
    let middleBarHeight = document.getElementsByClassName('sandbox-middle-bar')[0].clientHeight;

    let viewportHeight = document.documentElement.clientHeight;
    let offset = viewportHeight - sandboxContainer.clientHeight;

    let topHeight = e.pageY - offset - resizer.clientHeight / 2;
    let bottomHeight = viewportHeight - e.pageY - resizer.clientHeight / 2;

    if (e.pageY < viewportHeight - middleBarHeight - resizer.clientHeight / 2) {
      sandboxContainer.style.gridTemplateRows = topHeight + 'px ' + resizer.clientHeight + 'px ' + bottomHeight + 'px ';
    }
  }



}
