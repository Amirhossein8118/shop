// set $ ​​instead of document
const $ = document;

// assign cart box container to cartBoxContainer Variable
const cartBoxContainer = $.querySelector('.cart-box-container');
// assign product counts container to productCountsContainer Variable
const productCountsContainer = $.querySelector('.product-counts-container');
// assign product counts to productCounts Variable
const productCounts = $.querySelector('.product-counts');
// assign select all container to selectAllContainer Variable
const selectAllContainer = $.querySelector('.select-all-container');
// assign select checkbox to selectCheckbox Variable
const selectCheckbox = $.querySelectorAll(".select-checkbox");
// assign select all checkbox to selectAllCheckbox Variable
const selectAllCheckbox = $.querySelector('.select-all-checkbox');
// assign trash all to trashAll Variable
const trashAll = $.querySelector('.trash-all');
// assign trash to trash Variable
const trash = $.querySelectorAll('.trash');

// get the product count and store it in the product counts variable
productCounts.innerHTML = cartBoxContainer.children.length;

// check the product inventory in the shopping cart
if (cartBoxContainer.innerHTML == false) {
    cartBoxContainer.classList.add('flex', 'justify-center', 'items-center');
    productCountsContainer.classList.add('hidden');
    selectAllContainer.classList.add('hidden');
    let notExistImg = $.createElement("img");
    notExistImg.classList.add("max-sm:w-40");
    notExistImg.setAttribute('src', '/build/img/cart/not-exist.svg');
    notExistImg.setAttribute('width', '240px');
    notExistImg.setAttribute('draggable', false);
    cartBoxContainer.appendChild(notExistImg);
}

// select all products using the select All button
selectAllCheckbox.addEventListener("click", function () {
    selectCheckbox.forEach(item => {
        if (selectAllCheckbox.checked) {
            item.setAttribute('checked', 'true');
            trashAll.classList.replace('hidden', 'flex');
        }
        else {
            item.removeAttribute('checked');
            trashAll.classList.replace('flex', 'hidden');
        }
    });
});

// create a prompt using the sweet alert library to remove the products from the shopping cart
trashAll.addEventListener("click", function () {
    Swal.fire({
        text: 'آیا از حذف تمامی کالا ها مطمئن هستید؟',
        icon: 'warning',
        iconColor: '#7B74FF',
        confirmButtonText: 'حذف',
        confirmButtonColor: '#7B74FF',
        showCancelButton: true,
        cancelButtonText: 'انصراف'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '',
                'تمامی کالا ها از سبد خرید حذف شدند.',
                'success'
            )
            let swal2Confirm = document.querySelector('.swal2-confirm');
            swal2Confirm.innerHTML = 'باشه';
        }
    });
});

// create a prompt using the sweet alert library to remove the product from the shopping cart
trash.forEach(item => {
    item.addEventListener('click', function () {
        Swal.fire({
            text: 'آیا از حذف کالای انتخاب شده مطمئن هستید؟',
            icon: 'warning',
            iconColor: '#7B74FF',
            confirmButtonText: 'حذف',
            confirmButtonColor: '#7B74FF',
            showCancelButton: true,
            cancelButtonText: 'انصراف'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '',
                    'کالای انتخاب شده از سبد خرید حذف شد.',
                    'success'
                )
                let swal2Confirm = document.querySelector('.swal2-confirm');
                swal2Confirm.innerHTML = 'باشه';
            }
        });
    });
});