---
title: Modulation
date: 2025-05-04 09:00:00
tags:
    - radio
categories:
    - radio
keywords:
    - markdown
    - code block
---

# Modulación en Radioafición: Conceptos Básicos

La modulación es un proceso fundamental en la transmisión de radio. Básicamente, consiste en **modificar una señal portadora** (una onda de radio de frecuencia fija) para **incorporarle la información** que queremos transmitir (como voz, datos, etc.). Una señal portadora por sí sola, sin modular, no transporta ninguna información útil.

Existen diferentes maneras de alterar esa portadora para codificar la información. Las principales son:

* **Modulación de Amplitud (AM):** En este tipo, se varía la **amplitud** (la "altura" o intensidad) de la onda portadora al ritmo de la señal de información, mientras que su frecuencia permanece constante.

* **Modulación de Frecuencia (FM):** Aquí, lo que se varía es la **frecuencia** de la portadora siguiendo la señal de información, manteniendo constante su amplitud.

* **Modulación de Fase (PM):** En este caso, se modifica la **fase** (la posición relativa en el ciclo de la onda) de la portadora para codificar la información.

## Bandas Laterales

Cuando se modula una señal portadora, especialmente en AM y FM, no solo se transmite la frecuencia original de la portadora, sino que aparecen nuevas frecuencias a su alrededor, llamadas **bandas laterales**. Estas bandas laterales son las que realmente contienen la información.

* En **AM**, típicamente aparecen dos bandas laterales: la **Banda Lateral Superior (USB - Upper Sideband)** y la **Banda Lateral Inferior (LSB - Lower Sideband)**. La USB se crea sumando la frecuencia de la señal moduladora a la portadora, y la LSB restándola. El **ancho de banda** en AM es el espectro total que ocupan la portadora y sus dos bandas laterales.

* En **FM**, el proceso genera *muchas* bandas laterales, y el conjunto de la portadora y todas estas bandas laterales se denomina **espectro de frecuencia**.

## Modulación de Banda Lateral Única (SSB)

La **SSB (Single Sideband)** es una forma eficiente de modulación derivada de la AM. Consiste en transmitir solo *una* de las bandas laterales (ya sea la USB o la LSB) y suprimir la portadora original. Esto ofrece una ventaja significativa: se consigue **cuatro veces más potencia efectiva** en la transmisión con la misma potencia de equipo, ya que toda la energía se concentra en la banda lateral que lleva la información.

* **Uso práctico:** Por convenio, en radioafición se suele usar la **LSB** en las bandas de 160, 80 y 40 metros (frecuencias de 1.8 MHz, 3.5 MHz y 7 MHz). En otras bandas se suele usar USB.

## Otros Conceptos Importantes

* **Sobremoulación:** Ocurre cuando se aplica demasiada señal de información (por ejemplo, hablar muy fuerte al micrófono) a la portadora, deformándola. Esto provoca una transmisión de mala calidad y puede generar interferencias. Se corrige reduciendo la señal de entrada (bajando la ganancia del micrófono) o reparando posibles averías.

* **Banda Base:** Es el rango de frecuencias que ocupa la señal original que queremos transmitir (la información) *antes* de modular la portadora. Por ejemplo, la banda base de la voz humana está entre 300 Hz y 3400 Hz aproximadamente.

* **DSP (Procesador Digital de Señal):** Es un componente electrónico moderno que actúa como un filtro digital muy versátil, permitiendo mejorar la calidad de la señal, reducir ruido, etc.

