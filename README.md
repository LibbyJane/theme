# Running locally
$ shopify theme dev --store quickstart-d226f5a5.myshopify.com

'gulp' for sass compilation

# Notes

## Colors
    To render as HSL:  eg {{ scheme.settings.background | color_to_hsl }}


## Product rubber attribute ratings:
- add categories to product metafield definitions https://admin.shopify.com/store/zef001-0v/settings/custom_data/product/metafields?tab=constrained

### Add the block on the product page
On the 'Default product' theme page
- under 'Template', move your mouse just below 'Product Information', a plus sign button should appear. Click it.
- Select 'Custom metadata' from the available blocks