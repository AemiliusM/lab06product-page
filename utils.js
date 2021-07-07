export function findById(items, id) {
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function toUDS(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(lampItem, cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = lampItem.name;
    tr.appendChild(tdName);


    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUDS(lampItem.price);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = lampItem.price * cartItem.qty;
    tdTotal.textContent = toUDS(total);
    tr.appendChild(tdTotal);

    return tr;
}

export function getTotal(lamps, cart){

    let orderTotal = 0;

    for (let item of cart) {
        const lamp = findById(lamps, item.id);
        orderTotal += lamp.price * item.qty;
    }
    return orderTotal;
}
