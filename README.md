## 1. Introducció

L’àudio és una representació elèctrica o magnètica del so, generada per transductors com micròfons, altaveus o targetes de so.
Les seves característiques principals són:
- Intensitat: energia acústica mesurada en decibels.
- To: nombre de vibracions per segon que determina si un so és agut o greu.
- Duració: temps durant el qual el so és percebut.
- Timbre: qualitat que permet diferenciar sons de diversos instruments o veus.

### Tipus d’àudio
- Analògic: grava i reprodueix amb circuits i suports analògics (vinils, cassets).
- Digital: emmagatzema i reprodueix el so com a dades binàries (CD, DVD, discs durs...).

## 2. Formats d’àudio i diferències
### Categories
- Lossless: sense pèrdua d’informació.
- Lossy: amb pèrdua de qualitat o dades.
- Uncompressed: sense compressió de mida.
- Compressed: amb compressió per reduir pes.

### Formats principals
- mp3: Compressed Lossy. Format molt compatible, però amb menor qualitat.
- ogg: Compressed Lossy. Millor qualitat que mp3, menys comú ja que no és tan conegut.
- wav: Uncompressed Lossless. Màxima qualitat, però fitxers grans i pesats.
  
## 3. Formats recomanats per web
El format més recomanat és mp3 perquè és petit, compatible i suficient per a la majoria d’usuaris.
Es recomana comprimir l’àudio tant com sigui posible sense perdre massa qualitat per evitar temps de càrrega llargs o talls.
No s’hauria d’utilitzar àudio si no és necessari o si no millora l’experiència de l’usuari.
Evitar àudios llargs, de baixa qualitat o que no es puguin silenciar.

## 4. Eines utilitzades
### Llibreries JavaScript
- howler.js: permet gestionar l’àudio al navegador de manera senzilla i compatible amb diferents plataformes.
	- Instal·lació: `npm install howler`
- tone.js: permet crear música o àudio interactiu directament des del navegador.
	- Instal·lació: `npm install tone`

### Editors d’àudio
- audacity: editor complet, gratuït i multiplataforma. L'editor més extés entre usuaris semi-profesionals
- FAEMedia: eina bàsica per retallar àudios, exportar en altres formats i eliminar sorolls. Només per a PC.
- WavePad: aplicació senzilla, suporta àudio d’alta qualitat, diversos formats i processament en lot.

## 5. Compatibilitat
No tots els navegadors o versions antigues admeten tots els formats d’àudio.
És recomanable oferir diverses opcions (com mp3 i ogg) per assegurar la reproducció.

## 6. Com implementar-ho a HTML

Per a implementar un àudio dins d’HTML és necessari utilitzar l’etiqueta `<audio>`.  
A dins d’aquesta, s’hi afegeixen etiquetes `<source>` amb l’atribut `src`, que especifica la ubicació del fitxer.
El navegador provarà de carregar els fitxers de dalt a baix, fins que trobi un format compatible.

### Atributs útils:
- **src:** ubicació de l’àudio que es vol utilitzar  
- **autoplay:** fa que l’àudio es reprodueixi automàticament en carregar la pàgina  
- **controls:** mostra els controls predeterminats d’àudio  
- **muted:** silencia l’àudio per defecte  
- **loop:** reprodueix l’àudio en bucle  

```HTML
<audio controls autoplay muted loop>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```

## 7. Exemple

Repositori Github: [https://github.com/Lobby35/Arxius-Multimedia](https://github.com/Lobby35/Arxius-Multimedia)

## 8. Conclusions

Afegir àudio a una pàgina web és senzill; l’única complicació habitual és assegurar-se que la ruta del fitxer és correcta.  
Amb un bon format i compressió adequada, es pot millorar l’experiència de l’usuari sense afectar el rendiment.

## 9. Recursos utilitzats

Nguyenuri, N. (2025, 13 de gener). *Descobreix el millor de JavaScript amb Best of JS.* Dev.to. https://dev.to/nhannguyenuri/discover-the-best-of-javascript-with-best-of-js-31gb  

Best of JS. (s. f.). *Projectes d’àudio.* https://bestofjs.org/projects?tags=audio  

Bits & Pieces. (2021, 14 d’octubre). *Biblioteques principals per al processament d’àudio amb JavaScript.* Blog.bitsrc.io. https://blog.bitsrc.io/4-top-audio-processing-libraries-for-javascript-2e5fff0f071d  

WebSites Over Coffee. (2023). *Experiència d’usuari i ús de l’àudio al teu lloc web.* https://websitesovercoffee.com/ux-and-using-audio-on-your-website/  

File Examples. (s. f.). *Fitxers d’àudio d’exemple.* https://file-examples.com/index.php/sample-audio-files/  

LALAL.AI. (2021, 27 de novembre). *Les diferències entre formats d’àudio: MP3, FLAC, WAV, AIFF, M4A i OGG.* https://www.lalal.ai/blog/difference-between-audio-formats-mp3-flac-wav-aiff-m4a-ogg/  

W3Schools. (s. f.). *Àudio en HTML5.* https://www.w3schools.com/html/html5_audio.asp  

Mozilla Developer Network. (2025, 13 de març). *Guia de còdecs d’àudio web.* https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Audio_codecs  

VideoAudioBlog. (s. f.). *Conceptes bàsics d’àudio.* https://videoyaudioblog.wordpress.com/conceptos-basicos-de-audio/  

GeeksforGeeks. (s. f.). *HTML5 Audio Tag.* https://www.geeksforgeeks.org/html/html5-audio-tag/  

Dani Voice Overs. (s. f.). *Los mejores editores de audio.* https://danivoiceovers.com/los-mejores-editores-de-audio/  

Best of JS. (s. f.). *Projectes d’àudio.* https://bestofjs.org/projects?tags=audio  

