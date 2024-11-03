import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild, signal, input, ChangeDetectionStrategy } from '@angular/core';
import { extend, NgtVector3 } from 'angular-three';
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

extend({ Mesh, MeshStandardMaterial, BoxGeometry });

@Component({
    selector: 'app-cube',
    standalone: true,
    templateUrl: './cube.component.html',
    styleUrl: './cube.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CubeComponent {
    position = input<NgtVector3>([0, 0, 0]);
    hovered = signal(false);
    clicked = signal(false);
    meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

    onBeforeRender(cube: Mesh) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
}