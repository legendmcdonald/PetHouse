import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {LogoutComponent} from '../logout/logout.component';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {BasketService} from '../../shared/services/basket/basket.service';
import {EventsService} from '../../shared/services/events.service';
import {WindowRef} from '../../shared/directives/WindowRef';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    title = 'StarRecords';
    productsPage = false;
    visible = true;
    searchEnabled = false;
    atTop = true;


    @Input() defaultColor = '#ffffff';
    @Input() scrollColor = '#000000';

    fontColor = this.defaultColor;

    constructor(
        private authenticationService: AuthenticationService,
        private basketService: BasketService,
        private eventsService: EventsService,
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute,
        private winRef: WindowRef,
    ) {

    }

    ngOnInit(): void {
        this.registerLoginShowEvent();
        this.registerRouteChanges();
        this.registerScrollEvent();
        this.registerShowEvent();
        this.registerHideEvent();
    }

    ngOnDestroy(): void {
        this.removeScrollEvent();
    }

    getClass() {
        if (this.searchEnabled || !this.atTop) {
            return 'app-navbar-dark';
        } else {
            return '';
        }
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    private registerShowEvent() {
        this.eventsService.registerEvent('MENU-SHOW', this, () => {
            this.show();
        });
    }

    private registerHideEvent() {
        this.eventsService.registerEvent('MENU-HIDE', this, () => {
            this.hide();
        });
    }

    private registerLoginShowEvent() {
        this.eventsService.registerEvent('LOGIN-SHOW', this, () => {
            this.openLoginComponent();
        });
    }

    private registerRouteChanges() {
        this.router.events.subscribe((val) => {
            this.productsPage = this.router.url === '/products';
            if (!this.productsPage) {
                this.searchEnabled = false;
            }

            // check home
            if (this.router.url === '/' || (this.router.url === '/contact')) {
                this.defaultColor = '#ffffff';
            } else {
                this.defaultColor = '#000000';
            }
            this.fontColor = this.defaultColor;
        });
    }

    private registerScrollEvent() {
        this.winRef.nativeWindow.addEventListener('scroll', this.scroll, true);
    }

    private removeScrollEvent() {
        window.removeEventListener('scroll', this.scroll, true);
    }


    scroll = (event: any): void => {
        const top = event.srcElement.scrollTop;
        if (top === 0) {
            this.atTop = true;
            this.fontColor = this.defaultColor;
        } else {
            this.atTop = false;
            this.fontColor = this.scrollColor;
        }
    }

    getBasketTotal() {
        const total = this.basketService.getCount();
        if (total === 0) {
            return '';
        }
        return String(total);
    }

    openRegisterComponent() {
        const ref = this.dialog.open(RegisterComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.navigateMyAccount();
            }
        });
    }

    openLoginComponent() {
        const ref = this.dialog.open(LoginComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.navigateMyAccount();
            }
        });
    }

    openLogoutComponent() {
        const ref = this.dialog.open(LogoutComponent, {autoFocus: true, minWidth: 400});
        ref.afterClosed().subscribe(result => {
            if (result) {
                this.basketService.clear();
                this.navigateHome();
            }
        });
    }

    openCategories() {
        this.eventsService.emit('PRODUCTS-CATEGORIES-SHOW');
    }

    openSearch() {
        this.searchEnabled = true;
    }

    closeSearch() {
        this.searchEnabled = false;
        this.eventsService.emit('PRODUCTS-SEARCH-CLOSE');
    }
    onSearchChange(event) {
        this.eventsService.emit('PRODUCTS-SEARCH', event);
    }

    // ----------------
    navigateHome() {
        this.router.navigate(['']);
    }

    navigateMyAccount() {
        this.router.navigate([this.authenticationService.isAdmin() ? 'admin' : 'user']);
    }

    navigateBasket() {
        this.router.navigate(['basket']);
    }


}
