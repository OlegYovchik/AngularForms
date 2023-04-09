import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from './permission.service';

@Directive({
  selector: '[ngShowBlock]'
})
export class ShowBlockDirective implements OnInit{
  @Input()ngShowBlock = '';
  public templateName = '';

  constructor(private templRef: TemplateRef<any>, private vcr: ViewContainerRef, private permission: PermissionService) { }

  ngOnInit(): void {
    this.permission.getPermissions().subscribe(permissions=>{
      this.templateName = this.templRef.elementRef.nativeElement.parentElement.localName;
      const isShow = permissions.some((item: string)=>this.ngShowBlock.includes(item));
      if (isShow) {
        this.vcr.createEmbeddedView(this.templRef);
      } else {
        this.vcr.clear();
      }
    })
  }
}
