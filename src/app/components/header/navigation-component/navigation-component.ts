import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationTab } from '../../../models/header/navigation-tab.model';

@Component({
  selector: 'app-navigation-component',
  imports: [
    CommonModule
  ],
  templateUrl: './navigation-component.html',
  styleUrl: './navigation-component.scss',
})
export class NavigationComponent implements OnInit {

  public selectedTab: string = '';
  public navigationTabs: NavigationTab[] = [
    {tabName: 'HOME', tabPathUrl: ''},
    {tabName: 'ABOUT EXPO', tabPathUrl: '/about-expo'},
    {tabName: 'BE PART', tabPathUrl: '/be-part'},
    {tabName: 'FAQ', tabPathUrl: '/faq'},
    {tabName: 'SUPPLIERS', tabPathUrl: '/suppliers'},
  ];

  constructor (
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.selectedTab = this.navigationTabs[0].tabName;
    this.loadCurrentSelectedTab();
  }

  public selectTab(tab: NavigationTab): void {
    this.selectedTab = tab.tabName;
    this.navigatePage(tab);
  }

  private navigatePage(tab: NavigationTab): void {
    this.router.navigate([tab.tabPathUrl]);
  }

  private loadCurrentSelectedTab(): void {
    const currentUrlPath: string = globalThis.location.pathname.split('/')[1];
    const currentTabSelected: NavigationTab | undefined = this.navigationTabs.find(option => option.tabPathUrl.includes(currentUrlPath));

    if (currentTabSelected) {
      this.selectTab(currentTabSelected);
    }
    else {
      this.selectTab(this.navigationTabs[0]);
    }
  }
}
