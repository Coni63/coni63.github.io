import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraph } from './components/scene/scene.component';
// import { StarsComponent } from '../../components/stars/stars.component';
import { Scene } from 'three';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgtCanvas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { class: 'stars-soba' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly sceneGraph = SceneGraph;
}