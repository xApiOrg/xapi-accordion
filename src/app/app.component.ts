import { Component } from '@angular/core';

@Component({
  selector: 'xapi-accordion-demo',
  styleUrls: ['./app.component.scss'],
  template: `
    <xapi-accordion>
      <xapi-accordion-group heading="First Group Header" isOpen=true>
        Introduction
      </xapi-accordion-group>
      <xapi-accordion-group [heading]="group.heading" *ngFor="let group of groups">
        {{group.content}}
      </xapi-accordion-group>
      <xapi-accordion-group heading="Last Group Header">
        Additional Information
      </xapi-accordion-group>
    </xapi-accordion>
  `
})
export class AppComponent {
  isGroupOpen = false;

    groups: Array<any> = [
        {
            heading: 'Angular2Accordion Dynamic Content A',
            content: ' I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion Dynamic Content B',
            content: 'I’m a dynamic content to show in angular 2 accordion : )'
        },
        {
            heading: 'Angular2Accordion HTML Content C',
            content: 'I’m a dynamic content to show in angular 2 accordion : ) '
        }
    ];
}
