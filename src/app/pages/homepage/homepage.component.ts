import { Component } from '@angular/core';
import { SceneGraph } from '../../components/scene/scene.component';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgtCanvas, SceneGraph],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  readonly sceneGraph = SceneGraph;
}
