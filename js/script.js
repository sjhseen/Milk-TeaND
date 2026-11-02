/* Milk TeaND - catalog, responsive navigation, and WhatsApp cart. */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const NOMOR_WA = '6285734562353';
    const rupiah = (angka) => 'Rp ' + angka.toLocaleString('id-ID');

    const header = document.querySelector('.header');
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('menuUtama');

    const tutupMenu = () => {
        if (!nav || !navToggle) return;
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Buka menu');
    };

    if (nav && navToggle) {
        navToggle.addEventListener('click', () => {
            const terbuka = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(terbuka));
            navToggle.setAttribute('aria-label', terbuka ? 'Tutup menu' : 'Buka menu');
        });

        nav.querySelectorAll('a').forEach((link) =>
            link.addEventListener('click', tutupMenu)
        );
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') tutupMenu();
        });
        document.addEventListener('click', (event) => {
            if (header && !header.contains(event.target)) tutupMenu();
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth > 760) tutupMenu();
        });
    }

    const aturHeader = () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 10);
    };
    aturHeader();
    window.addEventListener('scroll', aturHeader, { passive: true });

    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.hero, section[id]');
    if ('IntersectionObserver' in window && sections.length) {
        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const id = entry.target.id || 'beranda';
                navLinks.forEach((link) => {
                    const aktif = link.getAttribute('href') === '#' + id;
                    link.classList.toggle('active', aktif);
                    if (aktif) link.setAttribute('aria-current', 'page');
                    else link.removeAttribute('aria-current');
                });
            });
        }, { rootMargin: '-40% 0px -55% 0px' });
        sections.forEach((section) => spy.observe(section));
    }

    const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elemenReveal = document.querySelectorAll(
        '.section-heading, .about-card, .feature-card, .form-card, .contact-card'
    );
    if ('IntersectionObserver' in window && !kurangiGerak) {
        const reveal = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const element = entry.target;
                element.classList.add('visible');
                observer.unobserve(element);
                setTimeout(() => {
                    element.classList.remove('reveal', 'visible');
                    element.style.transitionDelay = '';
                }, 1100);
            });
        }, { threshold: 0.12 });
        elemenReveal.forEach((element, index) => {
            element.classList.add('reveal');
            element.style.transitionDelay = (index % 3) * 80 + 'ms';
            reveal.observe(element);
        });
    }

    const produk = [
        { id: 1, nama: 'Original Milk Tea', kategori: 'CLASSIC FAVORITE', deskripsi: 'Rasa teh autentik, creamy, dan menyegarkan.', topping: 'Boba, Grass Jelly', harga: 41999, gambar: 'Images/original.jpg' },
        { id: 2, nama: 'Brown Sugar Milk Tea', kategori: 'SWEET INDULGENCE', deskripsi: 'Susu creamy dengan manisnya brown sugar.', topping: 'Boba, Grass Jelly', harga: 45999, gambar: 'Images/brownsugar.jfif' },
        { id: 3, nama: 'Chocolate Milk Tea', kategori: 'CHOCOLATE LOVER', deskripsi: 'Rasa cokelat kaya dengan sentuhan teh creamy.', topping: 'Boba, Chocolate', harga: 47999, gambar: 'Images/chocolate.jpg' },
        { id: 4, nama: 'Matcha Milk Tea', kategori: 'ZEN MOMENT', deskripsi: 'Aroma matcha khas dengan tekstur lembut dan creamy.', topping: 'Boba, Mochi', harga: 48999, gambar: 'Images/matcha.jpg' },
        { id: 5, nama: 'Mango Milk Tea', kategori: 'TROPICAL FRESH', deskripsi: 'Sensasi mangga segar bertemu susu creamy.', topping: 'Boba, Mangga', harga: 49999, gambar: 'Images/mango.jpg' },
        { id: 6, nama: 'Taro Milk Tea', kategori: 'TARO DELIGHT', deskripsi: 'Taro lembut dengan rasa manis yang menenangkan.', topping: 'Boba, Puding', harga: 49999, gambar: 'Images/taro.jpg' },
        { id: 7, nama: 'Thai Tea', kategori: 'THAI CLASSIC', deskripsi: 'Teh Thailand beraroma khas dengan susu creamy.', topping: 'Boba, Grass Jelly', harga: 39999, gambar: 'Images/thaitea.jpg' },
        { id: 8, nama: 'Red Velvet Milk Tea', kategori: 'VELVET SERIES', deskripsi: 'Rasa red velvet lembut dalam sajian milk tea.', topping: 'Boba, Cream Cheese', harga: 48999, gambar: 'Images/redvelvet.jpg' },
        { id: 9, nama: 'Ovaltine Milk Tea', kategori: 'MALTY FAVORITE', deskripsi: 'Perpaduan malt cokelat dan teh susu yang creamy.', topping: 'Boba, Ovaltine Crunch', harga: 47999, gambar: 'Images/ovaltine.jpg' },
        { id: 10, nama: 'Tiramisu Milk Tea', kategori: 'DESSERT SERIES', deskripsi: 'Sentuhan tiramisu dengan rasa teh susu yang lembut.', topping: 'Boba, Crumble', harga: 52999, gambar: 'Images/tiramisu.jpg' },
        { id: 11, nama: 'Strawberry Milk Tea', kategori: 'BERRY BLISS', deskripsi: 'Rasa stroberi manis dan segar berpadu dengan susu.', topping: 'Boba, Jelly', harga: 47999, gambar: 'Images/strawberry.jpg' },
        { id: 12, nama: 'Lychee Tea Latte', kategori: 'FRUITY FRESH', deskripsi: 'Aroma leci segar dalam racikan teh susu ringan.', topping: 'Lychee, Popping Boba', harga: 46999, gambar: 'Images/leci.jpg' },
        { id: 13, nama: 'Vanilla Milk Tea', kategori: 'VANILLA CLOUD', deskripsi: 'Aroma vanilla lembut melengkapi teh susu klasik.', topping: 'Boba, Puding', harga: 44999, gambar: 'Images/vanilla.jpg' },
        { id: 14, nama: 'Caramel Milk Tea', kategori: 'CARAMEL SWIRL', deskripsi: 'Teh susu creamy dengan sentuhan karamel.', topping: 'Boba, Grass Jelly', harga: 49999, gambar: 'Images/caramel.jpg' },
        { id: 15, nama: 'Cheese Foam Milk Tea', kategori: 'CREAMY TOP', deskripsi: 'Milk tea favorit dengan lapisan cheese foam gurih.', topping: 'Cheese Foam, Boba', harga: 52999, gambar: 'Images/keju.jpg' },
        { id: 16, nama: 'Oreo Milk Tea', kategori: 'COOKIE CRUNCH', deskripsi: 'Teh susu creamy dengan sensasi biskuit cokelat.', topping: 'Oreo Crumble, Boba', harga: 50999, gambar: 'Images/oreo.jpg' },
        { id: 17, nama: 'Hojicha Milk Tea', kategori: 'ROASTED TEA', deskripsi: 'Teh hojicha panggang dengan aroma khas dan lembut.', topping: 'Boba, Mochi', harga: 52999, gambar: 'Images/hojicha.jpg' },
        { id: 18, nama: 'Jasmine Milk Tea', kategori: 'FLORAL CLASSIC', deskripsi: 'Teh melati harum dengan perpaduan susu yang ringan.', topping: 'Boba, Grass Jelly', harga: 42999, gambar: 'Images/jasmine.jpg' },
        { id: 19, nama: 'Wintermelon Milk Tea', kategori: 'MELON COMFORT', deskripsi: 'Manis wintermelon yang lembut dan menyegarkan.', topping: 'Boba, Grass Jelly', harga: 45999, gambar: 'Images/wintermelon.jpg' },
        { id: 20, nama: 'Coffee Milk Tea', kategori: 'COFFEE MEETS TEA', deskripsi: 'Perpaduan karakter kopi dan teh susu yang creamy.', topping: 'Boba, Coffee Jelly', harga: 49999, gambar: 'Images/kopi.jpg' },
    ];

    const productGrid = document.getElementById('productGrid');
    const form = document.getElementById('formPesan');
    if (!productGrid || !form) return;

    const buatElemen = (tag, className, text) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    };

    const buatKartuProduk = (item) => {
        const card = buatElemen('article', 'product-card');
        const imageWrap = buatElemen('div', 'product-image');
        const image = document.createElement('img');
        image.src = item.gambar;
        image.alt = item.nama;
        image.loading = 'lazy';
        imageWrap.append(image, buatElemen('span', 'product-number', String(item.id).padStart(2, '0')));

        const content = buatElemen('div', 'product-content');
        content.append(
            buatElemen('span', 'product-category', item.kategori),
            buatElemen('h3', '', item.nama),
            buatElemen('p', 'deskripsi', item.deskripsi)
        );
        const productInfo = buatElemen('div', 'product-info');
        productInfo.append(
            buatElemen('span', 'info-label', 'Topping'),
            buatElemen('p', '', item.topping)
        );
        const photocardInfo = buatElemen('div', 'product-info');
        photocardInfo.append(
            buatElemen('span', 'info-label', 'Bonus Photocard'),
            buatElemen('p', '', 'Baby Monster, Hearts2Hearts')
        );
        const bottom = buatElemen('div', 'product-bottom');
        const addButton = buatElemen('button', 'btn btn-pesan', 'Tambah');
        addButton.type = 'button';
        addButton.dataset.produk = String(item.id);
        addButton.setAttribute('aria-label', 'Tambah ' + item.nama + ' ke keranjang');
        bottom.append(buatElemen('p', 'harga', rupiah(item.harga)), addButton);
        content.append(productInfo, photocardInfo, bottom);
        card.append(imageWrap, content);
        return card;
    };

    produk.forEach((item) => productGrid.appendChild(buatKartuProduk(item)));

    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutButton = document.getElementById('checkoutButton');
    const clearCartButton = document.getElementById('clearCart');
    const status = document.getElementById('formStatus');
    const inputNama = form.querySelector('#nama');
    const inputWa = form.querySelector('#whatsapp');
    const inputPhotocard = form.querySelector('#photocard');
    const inputCatatan = form.querySelector('#catatan');
    const keranjang = new Map();

    const setStatus = (message, type = 'neutral') => {
        if (!status) return;
        status.textContent = message;
        status.classList.remove('sukses', 'error');
        if (type === 'sukses') status.classList.add('sukses');
        if (type === 'error') status.classList.add('error');
    };

    const bersihkanNomor = (value) => value.replace(/[\s\-().]/g, '');

    const setError = (input, pesan) => {
        let error = input.parentElement.querySelector('.error-msg');
        if (!error) {
            error = buatElemen('small', 'error-msg');
            error.id = input.id + '-error';
            error.setAttribute('role', 'alert');
            input.parentElement.appendChild(error);
        }
        error.textContent = pesan;
        input.classList.toggle('input-error', Boolean(pesan));
        input.setAttribute('aria-invalid', pesan ? 'true' : 'false');
        if (pesan) input.setAttribute('aria-describedby', error.id);
        else input.removeAttribute('aria-describedby');
    };

    const renderKeranjang = () => {
        cartItems.replaceChildren();
        let total = 0;
        let jumlahItem = 0;

        keranjang.forEach((quantity, id) => {
            const item = produk.find((product) => product.id === id);
            if (!item) return;
            const subtotal = item.harga * quantity;
            total += subtotal;
            jumlahItem += quantity;

            const row = buatElemen('li', 'cart-item');
            const details = buatElemen('div', 'cart-item-details');
            details.append(
                buatElemen('strong', '', item.nama),
                buatElemen('span', '', rupiah(item.harga) + ' / cup'),
                buatElemen('span', 'cart-subtotal', 'Subtotal: ' + rupiah(subtotal))
            );

            const controls = buatElemen('div', 'cart-controls');
            controls.setAttribute('aria-label', 'Jumlah ' + item.nama);
            const kurang = buatElemen('button', 'cart-quantity', '−');
            kurang.type = 'button';
            kurang.setAttribute('aria-label', 'Kurangi ' + item.nama);
            kurang.addEventListener('click', () => ubahJumlah(item.id, -1));
            const count = buatElemen('span', 'cart-count', String(quantity));
            count.setAttribute('aria-live', 'polite');
            const tambah = buatElemen('button', 'cart-quantity', '+');
            tambah.type = 'button';
            tambah.setAttribute('aria-label', 'Tambah ' + item.nama);
            tambah.disabled = quantity >= 99;
            tambah.addEventListener('click', () => ubahJumlah(item.id, 1));
            const hapus = buatElemen('button', 'cart-remove', 'Hapus');
            hapus.type = 'button';
            hapus.addEventListener('click', () => {
                keranjang.delete(item.id);
                renderKeranjang();
            });
            controls.append(kurang, count, tambah, hapus);
            row.append(details, controls);
            cartItems.appendChild(row);
        });

        cartTotal.textContent = rupiah(total);
        cartEmpty.hidden = keranjang.size > 0;
        checkoutButton.disabled = keranjang.size === 0;
        clearCartButton.disabled = keranjang.size === 0;
        checkoutButton.textContent = jumlahItem
            ? 'Pesan ' + jumlahItem + ' cup via WhatsApp'
            : 'Pesan via WhatsApp';
    };

    const ubahJumlah = (id, delta) => {
        const jumlah = keranjang.get(id) || 0;
        const berikutnya = Math.max(0, Math.min(99, jumlah + delta));
        if (berikutnya === 0) keranjang.delete(id);
        else keranjang.set(id, berikutnya);
        renderKeranjang();
    };

    productGrid.addEventListener('click', (event) => {
        const button = event.target.closest('.btn-pesan[data-produk]');
        if (!button) return;
        ubahJumlah(Number(button.dataset.produk), 1);
        setStatus('Menu ditambahkan ke keranjang.', 'sukses');
    });

    clearCartButton.addEventListener('click', () => {
        keranjang.clear();
        setStatus('Keranjang dikosongkan.', 'sukses');
        renderKeranjang();
    });

    [inputNama, inputWa].forEach((input) =>
        input.addEventListener('input', () => {
            setError(input, '');
            if (status && status.textContent) setStatus('', 'neutral');
        })
    );

    form.addEventListener('reset', () => {
        setTimeout(() => {
            [inputNama, inputWa].forEach((input) => setError(input, ''));
            setStatus('', 'neutral');
        }, 0);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        setStatus('', 'neutral');

        let valid = true;
        const nomor = bersihkanNomor(inputWa.value);
        const errorNama = inputNama.value.trim().length < 3
            ? 'Nama minimal 3 karakter.'
            : '';
        const errorWa = /^(\+62|62|0)8[1-9][0-9]{7,11}$/.test(nomor)
            ? ''
            : 'Masukkan nomor WhatsApp yang valid, contoh: 085775763956.';

        setError(inputNama, errorNama);
        setError(inputWa, errorWa);
        if (errorNama || errorWa) valid = false;
        if (!keranjang.size) {
            setStatus('Tambahkan minimal satu menu ke keranjang.', 'error');
            valid = false;
        }
        if (!valid) {
            if (errorNama) inputNama.focus();
            else if (errorWa) inputWa.focus();
            return;
        }

        let total = 0;
        const detailProduk = [];
        keranjang.forEach((quantity, id) => {
            const item = produk.find((product) => product.id === id);
            if (!item) return;
            const subtotal = item.harga * quantity;
            total += subtotal;
            detailProduk.push(
                '- ' + item.nama + ' x' + quantity + ' = ' + rupiah(subtotal)
            );
        });

        const pesan = [
            'Halo Milk TeaND, saya ingin memesan:',
            '',
            ...detailProduk,
            '',
            'Total: ' + rupiah(total),
            'Nama: ' + inputNama.value.trim(),
            'WhatsApp: ' + nomor,
            'Photocard: ' + (inputPhotocard.value.trim() || '-'),
            'Catatan: ' + (inputCatatan.value.trim() || '-'),
        ].join('\n');
        const url = 'https://wa.me/' + NOMOR_WA + '?text=' + encodeURIComponent(pesan);
        setStatus('Membuka WhatsApp untuk mengirim pesanan. Tinjau pesannya lalu tekan Kirim di WhatsApp.', 'sukses');
        window.location.assign(url);
    });

    renderKeranjang();
});
