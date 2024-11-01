import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, viewChild, signal, input } from '@angular/core';
import { extend, injectBeforeRender, NgtVector3 } from 'angular-three';
import { AmbientLight, BoxGeometry, Mesh, MeshStandardMaterial, PointLight } from 'three';

extend({ Mesh, MeshStandardMaterial, BoxGeometry });
// extend({ Mesh, MeshStandardMaterial, BoxGeometry, AmbientLight, PointLight });

@Component({
    selector: 'app-cube',
    standalone: true,
    templateUrl: './cube.component.html',
    styleUrl: './cube.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
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