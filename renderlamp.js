export function renderLamp(lamp) {
    const lampLi = document.createElement('li');
    const lamph3 = document.createElement('h3');
    lamph3.textContent = lamp.name;

    const lampImg = document.createElement('img');
    lampImg.src = `./assets/${lamp.image}`;
    lampImg.alt = lamp.name;

    const lampSpan = document.createElement('span');
    lampSpan.textContent = `$${lamp.price}`;

    const lampDesc = document.createElement('h2');
    lampSpan.textContent = `${lamp.description}`;

    const button = document.createElement('button');
    button.textContent = 'Add To Cart!';

    lampLi.appendChild(lamph3);
    lampLi.appendChild(lampImg);
    lampLi.appendChild(lampSpan);
    lampLi.appendChild(lampDesc);
    lampLi.appendChild(button);

    console.log(lampImg);

    return lampLi;
}