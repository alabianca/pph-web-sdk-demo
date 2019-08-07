import { Component, OnInit } from '@angular/core';

declare var pphwebsdk: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pphWebSDKDemoAngular';
  status: 'Off' | 'On' = 'Off';

  constructor() {}

  public ngOnInit() {
    this.connectToMediatorApp();
  }


  public toggle() {
    this.status = this.status === 'Off' ? 'On' : 'Off';
  }



  private connectToMediatorApp() {
    pphwebsdk.Setup.isSetupComplete()
      .then(() => {
        console.log('done')
      })
      .catch(() => {
        console.log('Never initialized before...')
        this.runUIFlowForFirstTime(() => {
          console.log('done')
        })
      })
  }

  private runUIFlowForFirstTime(cb) {
    pphwebsdk.Setup.startUIFlow(() => {
      cb();
    });
  }


}
