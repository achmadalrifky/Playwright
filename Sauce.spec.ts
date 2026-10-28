import { test, expect, _android } from '@playwright/test';
import { Android as Android } from '@playwright/test';

test.describe('SauceDemo', () => {
    test ('Login website', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);

        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');

        await page.getByRole('button', { name: 'Login' }).click();

        await test.info().attach('Dashboard', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Dashboard.png', fullPage: true}),
        contentType: 'image/png'
        });

    });

    test ('Add Cart', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);
        
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        
        await page.getByTestId('login-button').click();
        
        await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

        await expect(page.getByTestId('shopping-cart-link')).toHaveText('1');

        await test.info().attach('Add Cart', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Add to chart.png', fullPage: true}),
        contentType: 'image/png'
        });

    });

    test ('Remove product from product page', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);
        
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        
        await page.getByRole('button', { name: 'Login' }).click();
        await page.waitForTimeout(1000);

        await page.getByTestId('add-to-cart-sauce-labs-fleece-jacket').click();
        await page.waitForTimeout(1000);
        
        const BeforeRemove = await page.screenshot({path: 'D:/Playwright Evidance/Before Remove Product Page.png', fullPage: true});
        await test.info().attach('Before Remove', {
        body: BeforeRemove,
        contentType: 'image/png'
        });
        
        await page.waitForTimeout(1000);
        await page.getByTestId('remove-sauce-labs-fleece-jacket').click();

        await test.info().attach('After Remove', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/After Remove Product Page.png', fullPage: true}),
        contentType: 'image/png'
        });

    });

    test ('Remove from cart', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);
        
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByTestId('add-to-cart-sauce-labs-fleece-jacket').click();
        await page.getByTestId('shopping-cart-link').click();
        await page.getByTestId('remove-sauce-labs-fleece-jacket').click();
        

        await test.info().attach('Remove From Cart', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Remove from cart.png', fullPage: true}),
        contentType: 'image/png'
        });

    });

    test ('Filter Data', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);
        
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByTestId('product-sort-container').click();
        

        await test.info().attach('Filter Data', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Filter Data.png', fullPage: true}),
        contentType: 'image/png'
        });

        await page.getByTestId('product-sort-container').click();
        await expect(page.locator('option[value="za"]')).toHaveText('Name (Z to A)');
        // Jika elemen berada di sub menu (hidden)
        await page.getByTestId('product-sort-container').selectOption('za');
        
    });

    test ('Cancel Order', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);
        
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByTestId('add-to-cart-sauce-labs-fleece-jacket').click();
        await page.getByTestId('shopping-cart-link').click();
        
        await test.info().attach('Cart', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Cart.png', fullPage: true}),
        contentType: 'image/png'
        });

        await page.getByTestId('checkout').click();

        await page.getByRole('textbox', { name: 'First Name' }).fill('Al');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Rifky');
        await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('0000');

        await test.info().attach('Profile Customer', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Profile Customer.png', fullPage: true}),
        contentType: 'image/png'
        });
        
        await page.getByTestId('continue').click();

        await test.info().attach('Overview', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Overview.png', fullPage: true}),
        contentType: 'image/png'
        });

        await page.getByTestId('cancel').click();

        await expect(page.locator('xpath=//*[@id="header_container"]/div[2]/span')).toHaveText('Products');
        await test.info().attach('Swag Labs Page', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Remove from cart.png', fullPage: true}),
        contentType: 'image/png'
        });
        
    });

    test ('Checkout Order', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.waitForTimeout(1000);
        
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
        
        await page.getByRole('button', { name: 'Login' }).click();

        await page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt').click();
        await page.getByTestId('shopping-cart-link').click();
        
        await test.info().attach('Cart Page', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Cart Page.png', fullPage: true}),
        contentType: 'image/png'
        });
        
        await page.getByTestId('checkout').click();

        await page.getByRole('textbox', { name: 'First Name' }).fill('Rifky');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Al');
        await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill('0000');
        await test.info().attach('Profile', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Profile.png', fullPage: true}),
        contentType: 'image/png'
        });
        
        await page.getByTestId('continue').click();

        await test.info().attach('Overview Page', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Overview Page.png', fullPage: true}),
        contentType: 'image/png'
        });
        
        await page.getByTestId('finish').click();
        
        await expect(page.locator('xpath=//*[@id="checkout_complete_container"]/h2')).toHaveText('Thank you for your order!');
        
        await test.info().attach('Checkout Complete', {
        body: await page.screenshot({path: 'D:/Playwright Evidance/Checkout Complete.png', fullPage: true}),
        contentType: 'image/png'
        });
        
    });

});