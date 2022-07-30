import { Component, AfterViewInit , ViewChild, ElementRef } from '@angular/core';

import * as WorldWind from '@nasaworldwind/worldwind';


@Component({
  selector: 'app-overall-map',
  templateUrl: './overall-map.component.html',
  styleUrls: ['./overall-map.component.css']
})
export class OverallMapComponent implements AfterViewInit  {
  @ViewChild('canvasOne') canvasOne : ElementRef;
  
  ngAfterViewInit() {
    // const wwd = WorldWind.WorldWindow(this.scene.nativeElement);
    // This will work with the next release of WebWorldWind, which supports an
    // actual element instead of the ID as a string.

    // In the meantime, the ID must be used and makes the component not easily
    // reusable.
    const wwd = new WorldWind.WorldWindow('canvasOne');
    const serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    const layerName = "MOD_LSTD_CLIM_M";

    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());

    wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

    wwd.redraw();
  }

}
