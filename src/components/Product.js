export const Product = (data) => `
    <div class="item-card">
        <div class="item-card_img">
            <img src="${data.imgURL}" alt="item">
        </div>

        <div class="info">
            <div class="info_productName">
                <span>${data.name}</span>
            </div>
            <div class="info_cart">
                <div class="info_price">
                    <span class="price">${data.price}</span>
                    <span class="sign">${"$"}</span>
                </div>
                <input type="button" value="ADD" class="add">
            </div>
        </div>
    </div>
`;