import { formatDate } from '@angular/common';
import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faHamburger,
  faMap,
  faTicketAlt,
} from '@fortawesome/free-solid-svg-icons';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rotei-kiosk';

  // icons
  menuIcon = faBars;
  navTable = faHamburger;
  navMenu = faMap;
  navVoucher = faTicketAlt;

  // offcanvas for drawer
  private offcanvasService = inject(NgbOffcanvas);

  now: Date = new Date();
  interval: any;

  @ViewChild('time')
  timeNow!: ElementRef;
  @ViewChild('date')
  dateNow!: ElementRef;

  constructor(
    private zone: NgZone,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) this.offcanvasService.dismiss();
    });
  }

  async ngOnInit() {
    this.displayTime();
  }

  async ngOnDestroy() {
    clearInterval(this.interval);
  }

  displayTime() {
    this.zone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.now = new Date();

        // angular not having reactive variable built-in is wild
        this.renderer.setProperty(
          this.timeNow.nativeElement,
          'innerHTML',
          formatDate(this.now, 'hh:mm:ss a', 'en-US', '+0700')
        );
        this.renderer.setProperty(
          this.dateNow.nativeElement,
          'innerHTML',
          formatDate(this.now, 'EEEE, dd/MM/yyyy', 'vi-VN', '+0700')
        );
      }, 500);
    });
  }

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content).result;
  }
}
