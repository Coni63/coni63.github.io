import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, viewChild } from '@angular/core';
import { random } from 'maath';

import { NgtVector3, injectBeforeRender } from 'angular-three';

import { NgtsPointsBuffer } from 'angular-three-soba/performances';
import { NgtsPointMaterial } from 'angular-three-soba/materials';

@Component({
   selector: 'app-stars',
   standalone: true,
   templateUrl: './stars.component.html',
   styleUrl: './stars.component.scss',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [
      NgtsPointsBuffer, NgtsPointMaterial
   ],
})
export class StarsComponent {
   protected readonly Math = Math;

	sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 }) as Float32Array;
   position = input<Float32Array>(this.sphere);
   rotation = input<NgtVector3>([0, 0, Math.PI / 4]);

	private pointsBufferRef = viewChild.required(NgtsPointsBuffer);

	constructor() {
		injectBeforeRender(({ delta }) => {
			const points = this.pointsBufferRef().pointsRef().nativeElement;
			points.rotation.x -= delta / 10;
			points.rotation.y -= delta / 15;
		});
	}
}