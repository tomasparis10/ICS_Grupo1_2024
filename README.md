# PLAN DE CONFIGURACIÓN Y ESTRUCTURA

Este plan describe la configuración y estructura del repositorio que se utilizará para la materia Ingeniería y Calidad de Software (ICS). El objetivo es establecer una organización clara de los archivos teóricos y prácticos, así como un criterio de línea base que permita mantener un registro ordenado de las versiones a lo largo del curso.


**Criterio de Línea Base:**
Se creará una primera línea base una vez que se hayan cargado todos los archivos correspondientes al primer trabajo práctico (TP) evaluable en el repositorio. Las siguientes líneas base se generarán luego de la corrección de cada parcial.

---

## **Estructura del repositorio**
- 📂 **Teórico/**
  - 📁 **Presentaciones de clase/**
  - 📁 **Resúmenes/**
  - 📁 **Bibliografía/**
    - 📁 **Ingeniería de Software/**
    - 📁 **Testing de Software/**
    - 📁 **Agile/**
    - 📁 **Lean y Kanban/**
    - 📁 **SCM/**
  - 📁 **Toma de notas/**

- 📂 **Práctico/**
  - 📁 **Guías/**
  - 📁 **Trabajos Prácticos/**
  - 📁 **Ejercicios de clases/**
  - 📁 **Trabajos de investigación/**

- 📂 **Clases grabadas/**

- 📂 **Programa de la materia/**

- 📂 **Cronograma de clases/**


---

**Listado de Ítems de Configuración**

| Nombre Ítem de configuración | Regla de Nombrado | Ubicación Física |
|------------------------------|-------------------|------------------|
| Presentaciones de clase      | `<<NroClase>>_<<Contenido>>.pdf` | ICS_Grupo_2024/Teórico/Presentaciones de clase |
| Resúmenes                    | `Resumen<<Alumno>>_Unidad<<N>>.docx` | ICS_Grupo_2024/Teórico/Resúmenes |
| Bibliografía                 | `<<Titulo>>_<<Autor>>.pdf` | ICS_Grupo_2024/Bibliografía<<Tema>> |
| Toma de notas                | `clase<<fecha>>_<<Alumno>>.docx` | ICS_Grupo_2024/Teórico/Toma de notas |
| Guías                        | `Guia_<<Contenido>>.pdf` | ICS_Grupo_2024/Práctico/Guías |
| Trabajos Prácticos           | `TP<<N>>_<<Nombre>>.pdf` | ICS_Grupo_2024/Práctico/Trabajos Prácticos |
| Ejercicios de clases         | `Ejercicio<<N>>_<<Tema>>.docx` | ICS_Grupo_2024/Práctico/Ejercicios de clases |
| Trabajos de investigación    | `<<Nombre>>_Grupo.pdf` | ICS_Grupo_2024/Práctico/Trabajos de investigación |
| Clases grabadas              | `ClasesGrabadas.xlsx` | ICS_Grupo_2024/ |
| Programa de la materia       | `Programa_ICS_2024.pdf` | ICS_Grupo_2024/ |
| Cronograma de clases         | `Cronograma_4K2_2024.xlsx` | ICS_Grupo_2024/ |

---

**Glosario**

| Sigla        | Significado |
|--------------|-------------|
| `<<Alumno>>`  | Nombre del alumno en formato CamelCase (Ej: JuanPerez) |
| `<<Autor>>`   | Nombre del autor del libro o material utilizado en la bibliografía. Se utilizará “CamelCase” para el nombre. (Ej: MikeCohn) |
| `<<Contenido>>`| Nombre del tema correspondiente a la presentación de clase. Se utilizará “CamelCase” para el nombre. (Ej: LeanKanban) |
| `<<fecha>>`   | Fecha de la clase correspondiente a la toma de notas. |
| `<<ICS>>`     | Nombre de la materia Ingeniería y Calidad de Software |
| `<<N>>`       | Valor numérico de dos dígitos |
| `<<Nombre>>`  | Nombre del trabajo práctico. Se utilizará el formato “CamelCase” |
| `<<NroClase>>`| Número correspondiente a la presentación de clase. Se utilizarán 2 dígitos para la numeración. (Ej: 01) |
| `<<Tema>>`    | Nombre del tema al cual corresponde el ejercicio utilizado |
| `<<Título>>`  | Nombre del libro o material bibliográfico. Se utilizará el formato “CamelCase” |
