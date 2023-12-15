import { configureStore } from '@reduxjs/toolkit';
import adminLoginSlice from './slices/Admin/adminLoginSlice';
import saleLoginSlice from './slices/Sale/saleLoginSlice';
import warehouseLoginSlice from './slices/Warehouse/warehouseLoginSlice';
import logisticsLoginSlice from './slices/Logistics/logisticsLoginSlice';
import factoryLoginSlice from './slices/Factory/factoryLoginSlice';
import createTruckSlice from './slices/Logistics/createTruckSlice';
import truckListSlice from './slices/Logistics/truckListSlice';
import createCustomerSlice from './slices/Sale/createCustomerSlice';
import customersListSlice from './slices/Sale/customersListSlice';
import createOrderSlice from './slices/Sale/createOrderSlice';
import pendingOrdersListSlice from './slices/Sale/pendingOrdersListSlice';
import instocksListSlice from './slices/Sale/instocksListSlice';
import addProductsToOrderSlice from './slices/Sale/addProductsToOrderSlice';
import orderProcessConfirmSlice from './slices/Sale/orderProcessConfirmSlice';
import processingOrdersListSlice from './slices/Sale/processingOrdersListSlice';
import createDeliRouteSlice from './slices/Logistics/createDeliRouteSlice';

export const store = configureStore({
  reducer: {
    saleLogin: saleLoginSlice,
    warehouseLogin: warehouseLoginSlice,
    logisticsLogin: logisticsLoginSlice,
    adminLogin: adminLoginSlice,
    factoryLogin: factoryLoginSlice,
    createTruck: createTruckSlice,
    truckList: truckListSlice,
    createCustomer: createCustomerSlice,
    customersList: customersListSlice,
    createOrder: createOrderSlice,
    pendingOrdersList: pendingOrdersListSlice,
    instocksList: instocksListSlice,
    addProductsToOrder: addProductsToOrderSlice,
    orderProcessConfirm: orderProcessConfirmSlice,
    processingOrdersList: processingOrdersListSlice,
    createDeliRoute: createDeliRouteSlice,
  },
});
