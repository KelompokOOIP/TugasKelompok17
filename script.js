function hitungOOIP() {
    // Mengambil nilai input
    const area = parseFloat(document.getElementById('area').value);
    const thickness = parseFloat(document.getElementById('thickness').value);
    const porosity = parseFloat(document.getElementById('porosity').value) / 100; // Konversi dari % ke desimal
    const oilSaturation = parseFloat(document.getElementById('oilSaturation').value) / 100; // Konversi dari % ke desimal

    // Validasi input
    if (isNaN(area) || isNaN(thickness) || isNaN(porosity) || isNaN(oilSaturation)) {
        alert('Mohon masukkan semua nilai dengan benar');
        return;
    }

    // Validasi range nilai
    if (porosity > 1 || porosity < 0 || oilSaturation > 1 || oilSaturation < 0) {
        alert('Nilai porositas dan saturasi harus antara 0-100%');
        return;
    }

    // Menghitung OOIP
    // OOIP = 7758 × A × h × φ × (1 - Sw)
    // Dimana Sw = 1 - So (So adalah oil saturation)
    const OOIP = 7758 * area * thickness * porosity * oilSaturation;

    // Menampilkan hasil dengan format angka
    alert(`Hasil perhitungan OOIP adalah:\n\n${OOIP.toLocaleString()} barrels`);
}