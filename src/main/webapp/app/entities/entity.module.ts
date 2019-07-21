import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        loadChildren: './product/product.module#BoutikPamProductModule'
      },
      {
        path: 'product-category',
        loadChildren: './product-category/product-category.module#BoutikPamProductCategoryModule'
      },
      {
        path: 'product-order',
        loadChildren: './product-order/product-order.module#BoutikPamProductOrderModule'
      },
      {
        path: 'order-item',
        loadChildren: './order-item/order-item.module#BoutikPamOrderItemModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#BoutikPamCustomerModule'
      },
      {
        path: 'invoice',
        loadChildren: './invoice/invoice.module#BoutikPamInvoiceModule'
      },
      {
        path: 'shipment',
        loadChildren: './shipment/shipment.module#BoutikPamShipmentModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BoutikPamEntityModule {}
