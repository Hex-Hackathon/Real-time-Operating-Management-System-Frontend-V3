import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Flex, Button, Grid, Box, Container } from '@radix-ui/themes';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

import './style.css';
import { NavLink } from 'react-router-dom';

const WarehouseDashboard = () => {
  const productData = [
    {
      id: 1,
      name: 'Apple Watch Series 7',
      category: 'Electronics',
      price: '$269',
      sold: 22,
      profit: '$45',
    },
    {
      id: 2,
      name: 'Macbook Pro M1',
      category: 'Electronics',
      price: '$546',
      sold: 34,
      profit: '$125',
    },
    {
      id: 3,
      name: 'Dell Inspiron 15',
      category: 'Electronics',
      price: '$443',
      sold: 64,
      profit: '$247',
    },
    {
      id: 4,
      name: 'HP Probook 450',
      category: 'Electronics',
      price: '$499',
      sold: 72,
      profit: '$103',
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-end">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="mb-8 mt-5 py-2 px-5 bg-yellow-500 rounded shadow font-mons font-bold text-black">
              Add Stocks
            </button>
          </Dialog.Trigger>
          <Dialog.Portal className="pointer-events-none">
            <Dialog.Overlay
              className="DialogOverlay"
              onClick={(e) => e.stopPropagation()}
            />
            <Dialog.Content className="DialogContent">
              <Dialog.Title className="DialogTitle text-white mb-5 text-xl">
                Add New Stocks
              </Dialog.Title>

              <Container size="1">
                <Grid columns="2" className="flex gap-4">
                  <div>
                    <label htmlFor="name" className="text-white">Product Name</label>
                    <Box className="border p-5 w-full mt-3">
                      Product Name
                    </Box>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="text-white">Product Quantity</label>
                    <Box height="9" className="border p-5 w-full mt-3">
                      Product Quantity
                    </Box>
                  </div>
                </Grid>
              </Container>

              <div
                style={{
                  display: 'flex',
                  marginTop: 25,
                  justifyContent: 'flex-end',
                }}
              >
                <Dialog.Close asChild>
                  <button className=" mt-5 py-2 px-5 border border-white text-white rounded shadow font-mons font-bold mr-5">
                    Cancel
                  </button>
                </Dialog.Close>

                <button className=" mt-5 py-2 px-5 bg-yellow-500 rounded shadow font-mons font-bold text-black">
                  Add
                </button>
              </div>
              <Dialog.Close asChild></Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Stock Lists
          </h4>
        </div>

        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-3 flex items-center">
            <p className="font-medium">Product Name</p>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="font-medium">Category</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Price</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Sold</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="font-medium">Profit</p>
          </div>
        </div>

        {productData.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                {product.category}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.price}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.sold}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-meta-3">{product.profit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseDashboard;
