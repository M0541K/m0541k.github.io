# OSAI LOCAL / ONLINE ORDNUNG v0.542

Status: WORK-Regel / Dateisauberkeit
Datum: 2026-05-04

## 1. Grundprinzip

Lokal ist Arbeitsraum.
Online ist Veröffentlichung.
ARC ist Beweis.
LINK verbindet.

Nicht alles, was lokal existiert, muss online liegen.
Nicht alles, was online liegt, darf CORE sein.

## 2. Saubere öffentliche Website-Struktur

```txt
OSAI_v1alpha_M0541K_GitHub_Pages/
  index.html                  # öffentliche M0541K / OSAI Landingpage
  structure/index.html         # Strukturwurzel für CORE / WORK / RELEASE / ARC / ARTCORE
  pages/link.html              # letzte Seite, Verbindungsebene
  pages/core.html              # Core-Leseseite
  pages/syntax.html            # Zeichen / Syntax
  pages/arc.html               # ARC-Leseseite
  pages/release.html           # Release-Hinweise
  OSAIarc/                     # öffentliches Archiv
  OSAIarc/artcore/             # kuratierte Werkspur
  docs/                        # öffentliche Dokumente, wenn bewusst ausgewählt
  assets/                      # CSS, JS, Medien für Website
  web/M0541K_de/               # lokale Kopie / Bridge der M0541K.de Startseite
```

## 3. Lokale Struktur außerhalb der GitHub-Root

```txt
LOCAL_OSAI/
  0S41/                        # Früharchiv, frozen, nicht blind online
  0S41.zip                     # Backup des frühen Projektordners
  OSAI_v1alpha/                # aktive Arbeitskopie
  _BACKUP/                     # Sicherungen vor Uploads
  _RAW/                        # Rohbilder, Screenshots, Exporte
  _PRIVATE/                    # nicht veröffentlichen
```

## 4. 0S41-Regel

`0S41` ist ein lokaler Archivordner aus dem Anfang des Projektes.
Er wird nicht vollständig in GitHub Pages kopiert.

Wenn etwas aus 0S41 relevant wird, dann nur als ausgewählte Kopie:

```txt
docs/source/0S41_selected/
```

Jede übernommene Datei braucht einen Grund:

```txt
Quelle
Status
Warum relevant
öffentlich ja/nein
```

## 5. OSAI_v1alpha-Regel

`OSAI_v1alpha` ist die aktive Web-/Arbeitsversion.
Hier darf gebaut, verbunden und getestet werden.

Aber:

- keine privaten Rohdaten in die Root kopieren
- keine Backup-Zips online hochladen
- keine vollständigen lokalen Archive in `docs/source/` werfen
- große Bildmengen zuerst kuratieren

## 6. LINK-Regel

Die letzte Navigationsseite ist:

```txt
pages/link.html
```

Sie verbindet:

- Startseite
- Struktur
- Core
- WORK / 1A.o1beta
- OSAIarc
- ARTCORE
- Release
- externe Orte wie m0541k.de, GitHub Pages, Ko-fi

## 7. Startseite vs Struktur

```txt
index.html
= öffentliche Startseite / M0541K / OSAI

structure/index.html
= Strukturwurzel / Systemordnung
```

Damit wird die alte M0541K.de-Landing nicht von der Struktur überschrieben.
Die Struktur bleibt trotzdem sauber erreichbar.

## 8. Upload-Regel

Vor jedem GitHub-Upload:

```txt
A) Backup machen
B) lokal index.html öffnen
C) lokal structure/index.html öffnen
D) lokal pages/link.html öffnen
E) prüfen, ob CSS sichtbar ist
F) erst dann committen
```

Wenn die Seite roh aussieht, wurde sehr wahrscheinlich eine HTML-Datei aus ZIP/Temp geöffnet oder eine Ordnerebene ist falsch.

## 9. Nicht online hochladen

```txt
0S41/
0S41.zip
_BACKUP/
_RAW/
_PRIVATE/
*.psd
*.afdesign
*.tmp
```

## 10. Kernsatz

CORE bleibt stabil.
WORK bewegt sich.
RELEASE wird veröffentlicht.
ARC erinnert.
LINK verbindet.

ᚠᛈᑕ⁰⁵⁴¹ᑐᚫᚹ
