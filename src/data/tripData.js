export const tripData = {
  title: 'Praga · Český Krumlov · Viena · Budapest',
  dates: 'Finales de julio 2026',
  cities: [
    { id: 'praga', name: 'Praga', country: '🇨🇿', color: 'from-purple-600 to-pink-600' },
    { id: 'krumlov', name: 'Český Krumlov', country: '🇨🇿', color: 'from-pink-600 to-rose-600' },
    { id: 'viena', name: 'Viena', country: '🇦🇹', color: 'from-blue-600 to-cyan-600' },
    { id: 'budapest', name: 'Budapest', country: '🇭🇺', color: 'from-orange-600 to-yellow-600' },
  ],
  sections: {
    before: {
      title: '📋 Antes de salir',
      icon: '✈️',
      tasks: [
        { id: 'doc-dni', title: 'Verificar DNI en vigor', done: false, priority: 'high' },
        { id: 'doc-foto', title: 'Hacer fotos DNI y pasaporte (móvil + nube)', done: false, priority: 'high' },
        { id: 'doc-sanitaria', title: 'Descargar Tarjeta Sanitaria Europea', done: false, priority: 'high' },
        { id: 'seguro', title: 'Contratar seguro de viaje', done: false, priority: 'medium' },
        { id: 'apps-maps', title: 'Descargar Google Maps (offline: Praga, Viena, Budapest)', done: false, priority: 'high' },
        { id: 'apps-lens', title: 'Instalar Google Lens (traducción)', done: false, priority: 'medium' },
        { id: 'apps-citymapper', title: 'Instalar Citymapper', done: false, priority: 'medium' },
        { id: 'apps-bolt', title: 'Instalar Bolt (taxis)', done: false, priority: 'medium' },
        { id: 'apps-currency', title: 'Instalar Currency (conversión)', done: false, priority: 'low' },
        { id: 'apps-mapsme', title: 'Instalar MAPS.ME', done: false, priority: 'low' },
        { id: 'revolut', title: 'Revisar Revolut/N26 (comisiones viajero)', done: false, priority: 'high' },
        { id: 'bateria-externa', title: 'Comprar batería externa potente', done: false, priority: 'high' },
        { id: 'adaptadores', title: 'Verificar enchufe (tipo F europeo, 220V)', done: false, priority: 'medium' },
      ]
    },
    reservas: {
      title: '🎟️ Reservas imprescindibles',
      icon: '📅',
      tasks: [
        { id: 'res-parlamento', title: 'Parlamento Budapest (4-6 semanas antes)', done: false, priority: 'high', deadline: 'Urgente', link: 'https://www.jegymester.hu/parlament' },
        { id: 'res-schonbrunn', title: 'Palacio Schönbrunn Viena (2-3 semanas antes)', done: false, priority: 'high', deadline: '2-3 semanas', link: 'https://www.schoenbrunn.at' },
        { id: 'res-crucero', title: 'Crucero nocturno Danubio Budapest (10-15 días antes)', done: false, priority: 'high', deadline: '10-15 días', link: '' },
        { id: 'res-szechenyi', title: 'Balneario Széchenyi Budapest (si agosto)', done: false, priority: 'medium', deadline: 'Flexible', link: 'https://www.szechenyibath.hu' },
        { id: 'res-restaurantes', title: 'Restaurantes populares (2 semanas antes)', done: false, priority: 'medium', deadline: '2 semanas', link: '' },
      ]
    },
    packing: {
      title: '🎒 Qué empacar',
      icon: '🧳',
      tasks: [
        { id: 'pack-ropa', title: 'Ropa: 1 maleta mediana + mochila diaria', done: false, priority: 'high' },
        { id: 'pack-gafas', title: 'Gafas de sol', done: false, priority: 'high' },
        { id: 'pack-protector', title: 'Protector solar (28-35°C por la tarde)', done: false, priority: 'high' },
        { id: 'pack-gorra', title: 'Gorra o sombrero', done: false, priority: 'high' },
        { id: 'pack-paraguas', title: 'Paraguas plegable (posibles tormentas)', done: false, priority: 'high' },
        { id: 'pack-chubasquero', title: 'Chubasquero ligero', done: false, priority: 'high' },
        { id: 'pack-botella', title: 'Botella reutilizable (agua del grifo OK)', done: false, priority: 'medium' },
        { id: 'pack-panuelos', title: 'Pañuelos', done: false, priority: 'low' },
        { id: 'pack-cargador', title: 'Cargadores (enchufe tipo F)', done: false, priority: 'high' },
      ]
    },
    dinero: {
      title: '💰 Dinero y tarjetas',
      icon: '💳',
      tasks: [
        { id: 'money-czk', title: 'Sacar 2.000 CZK (~80€) para Praga + Krumlov', done: false, priority: 'high' },
        { id: 'money-huf', title: 'Sacar 20.000 HUF (~50€) para Budapest', done: false, priority: 'high' },
        { id: 'money-no-change', title: '❌ NO cambiar en: Plaza Ciudad Vieja, Puente Carlos, Plaza Wenceslao', done: false, priority: 'high' },
        { id: 'money-banks', title: '✅ Usar cajeros de bancos reconocidos (Česká Spořitelna, ČSOB, Erste, Raiffeisen)', done: false, priority: 'medium' },
        { id: 'money-respuesta', title: 'IMPORTANTE: Al pagar con tarjeta, SIEMPRE decir NO al pago en euros', done: false, priority: 'high' },
      ]
    },
    daily: {
      title: '📅 Checklist diario',
      icon: '☀️',
      tasks: [
        { id: 'daily-agua', title: '💧 Llevar agua', done: false, priority: 'high' },
        { id: 'daily-bateria', title: '🔋 Llevar batería externa', done: false, priority: 'high' },
        { id: 'daily-gafas', title: '😎 Llevar gafas de sol', done: false, priority: 'high' },
        { id: 'daily-protector', title: '☀️ Protector solar aplicado', done: false, priority: 'high' },
        { id: 'daily-dinero', title: '💵 Llevar efectivo + tarjeta', done: false, priority: 'high' },
        { id: 'daily-doc', title: '📄 Llevar documentación', done: false, priority: 'high' },
        { id: 'daily-paraguas', title: '☔ Llevar paraguas pequeño', done: false, priority: 'medium' },
      ]
    }
  },
  tips: [
    '🎯 Evitar ver demasiadas cosas en un día - disfrutar caminando y haciendo pausas',
    '🍽️ Comer lejos de monumentos principales (mejor precio y calidad)',
    '🚇 Tranvía M1 Budapest: segundo metro más antiguo de Europa continental',
    '2️⃣ Tranvía 2 Budapest: recorre el Danubio - vistas magníficas del Parlamento',
    '🍺 Ruin Bars Budapest: visitar Szimpla Kert antes de las 20:00',
    '🌙 Crucero Danubio al atardecer: Parlamento iluminado es espectacular',
    '💰 Moneda local siempre: NO pagar en euros aunque os lo ofrezcan',
  ]
}
