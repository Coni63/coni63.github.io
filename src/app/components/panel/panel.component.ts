import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	CUSTOM_ELEMENTS_SCHEMA,
	effect,
	ElementRef,
	inject,
	Injector,
	signal,
	viewChild,
} from '@angular/core';
import { NgtArgs, NgtHTML } from 'angular-three';
// import { NgtsOrbitControls } from 'angular-three-soba/controls';
import { NgtsHTML, NgtsHTMLContent } from 'angular-three-soba/misc';

declare const Chart: any;

@Component({
	selector: 'app-chart-container',
	standalone: true,
	template: `
		<h1>Chart</h1>
		<p>Content</p>
	`,
	host: {
		class: 'block w-[320px]',
	},
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartContainer extends NgtHTML {
	private chartContainer = viewChild.required<ElementRef<HTMLCanvasElement>>('chartContainer');
	// private data = Array.from({ length: 6 }, () => Math.random() * 100);

	// constructor() {
	// 	super();
	// 	// NOTE: I'm doing this dirty because I am lazy.
	// 	const injector = inject(Injector);
	// 	afterNextRender(() => {
	// 		effect(
	// 			(onCleanup) => {
	// 				const chartReady = PanelComponent.chartReady();
	// 				if (!chartReady) return;

	// 				const chart = new Chart(this.chartContainer().nativeElement, {
	// 					type: 'bar',
	// 					data: {
	// 						labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	// 						datasets: [{ label: '# of Votes', data: this.data, borderWidth: 1 }],
	// 					},
	// 					options: { scales: { y: { beginAtZero: true } } },
	// 				});

	// 				const id = setInterval(() => {
	// 					// randomize the data
	// 					this.data.forEach((_, index) => {
	// 						this.data[index] = Math.random() * 100;
	// 					});
	// 					chart.update();
	// 				}, 1000);
	// 				onCleanup(() => clearInterval(id));
	// 			},
	// 			{ injector },
	// 		);
	// 	});
	// }
}


@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [NgtArgs, NgtsHTML, NgtsHTMLContent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent {
	protected Math = Math;

	static chartReady = signal(true);
}
