import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { SceneGraph } from '../../components/scene/scene.component';
// import { StarsComponent } from '../../components/stars/stars.component';
import { Scene } from 'three';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgtCanvas],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  host: { class: 'stars-soba' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {
  readonly sceneGraph = SceneGraph;
}