import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input, ViewChild } from '@angular/core';
import { injectBeforeRender } from 'angular-three';
import { NgtsPointMaterial } from 'angular-three-soba/materials';
import { NgtsPointsBuffer } from 'angular-three-soba/performances';
import { random } from 'maath';


@Component({
   selector: 'app-stars',
   standalone: true,
   templateUrl: './stars.component.html',
   styleUrl: './stars.component.scss',
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [NgtsPointsBuffer, NgtsPointMaterial],
})
export class StarsComponent {
   protected readonly Math = Math;

   protected readonly sphere = random.inSphere(new Float32Array(3000), { radius: 1.5 }) as Float32Array;
   position = input<Float32Array>(this.sphere);

   @ViewChild(NgtsPointsBuffer) private pointsBufferRef!: NgtsPointsBuffer;

	constructor() {
		injectBeforeRender(({ delta }) => {
			const points = this.pointsBufferRef?.pointsRef().nativeElement;

			if (points) {
				points.rotation.x -= delta / 10;
				points.rotation.y -= delta / 15;
			}
      	});
	}
}