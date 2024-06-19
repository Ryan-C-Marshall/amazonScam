import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
<main>
  <section class="content">
    <router-outlet></router-outlet>
    <div class="page-bottom">
      <div class="gradient-line"></div>
      <span><a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088"
        >Conditions of Use</a></span>
      <span><a href=""
        >Privacy Notice</a></span>
      <span><a href=""
        >Help</a></span>
      <p id="copyright" class="copyright"
        >&copy; 1996 - 2024, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  </section>
</main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazonScam';
}
