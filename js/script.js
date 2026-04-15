/* -------------------------------------------------------------------------- */
/* LÓGICA DE TRADUCCIÓN                             */
/* -------------------------------------------------------------------------- */
console.log("SCRIPT_LOADED"); const translations = {
  es: {
    "nav_map": "Mapa Interactivo",
    "nav_home": "Inicio",
    "nav_intro": "Introducción",
    "nav_problem": "Planteamiento del Problema",
    "nav_geo": "Mapa de Ubicación Geográfica",
    "nav_obj": "Objetivos",
    "nav_desc_stats": "Estadística Descriptiva",
    "nav_methodology": "Metodología",
    "nav_vars_table": "Tablas de Variables",
    "nav_vars": "Variables",
    "nav_inf_stats": "Estadística Inferencial",
    "nav_reg_models": "Modelos de Regresión",
    "nav_ml": "Machine Learning",
    "nav_more": "Más",
    "nav_tools": "Infraestructura",
    "nav_about": "Sobre Nosotros",
    "hero_title_centered": "ANÁLISIS ESTADÍSTICO DE LOS ARRENDAMIENTOS DE PETRÓLEO Y GAS EN KANSAS",
    "hero_lead_centered": "Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio",
    "motivaciones_text": "Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos. Nuestro objetivo es no solo interpretar la información, sino también destacar la relevancia de la estadística en la toma de decisiones informadas dentro del ámbito profesional relacionado con nuestra carrera.",
    "footer_copy": "COPYRIGHT © 2026, GRUPO 1 - ESTADÍSTICA Y PROBABILIDAD.",
    "footer_uce": "UNIVERSIDAD CENTRAL DEL ECUADOR - FIGEMPA",
    "footer_rights": "TODOS LOS DERECHOS RESERVADOS.",
    "chat_title": "Asistente de Arrendamientos 🤖",
    "chat_send": "Enviar",
    "important_title": "¡IMPORTANTE!",
    "important_text": "Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.",
    "mision_vision_title": "MISIÓN - VISIÓN",
    "mision_title": "Misión",
    "mision_text": "Aplicar métodos estadísticos para analizar y cuantificar las características, distribución y estado de los arrendamientos de petróleo y gas en Kansas.",
    "vision_title": "Visión",
    "vision_text": "Convertirnos en un análisis estadístico de referencia que permita comprender las tendencias, distribución y gestión de los arrendamientos de petróleo y gas en Kansas, apoyando la toma de decisiones en el ámbito energético.",
    "motivaciones_title": "MOTIVACIONES DEL PROYECTO",
    "map_title": "MAPA INTERACTIVO DE ARRENDAMIENTOS",
    "about_intro_title": "INTRODUCCIÓN",
    "about_problem_title": "PLANTEAMIENTO DEL PROBLEMA",
    "about_problem_p1": "Los arrendamientos de petróleo y gas en Kansas representan áreas donde los propietarios de tierras han arrendado derechos mineros para la exploración, perforación y producción de petróleo y gas. El análisis de esta información es importante porque permite evaluar la distribución de estas concesiones, facilitando la identificación de patrones en la ubicación de los contratos, su estado operativo y la extensión de las áreas concesionadas.",
    "about_problem_p2": "El estudio de estos datos, aplicando metodologías y herramientas estadísticas, posibilita resumir y comparar la información existente para así detectar tendencias, analizar la concentración de los arrendamientos en el estado de Kansas y, en consecuencia, comprender mejor cómo se gestionan los recursos energéticos vinculados a estas actividades.",
    "about_map_title": "MAPA DE UBICACIÓN GEOGRÁFICA",
    "about_obj_title": "OBJETIVOS",
    "about_obj_gen_header": "Objetivo General:",
    "about_obj_gen_text": "Aplicar la estadística y técnicas de Machine Learning para analizar los arrendamientos de petróleo y gas registrados en Kansas, mediante el uso de herramientas computacionales.",
    "about_obj_spec_header": "Objetivos Específicos:",
    "about_obj_spec_1": "Conocer la situación actual de los arrendamientos de petróleo y gas en Kansas a través de sus características más importantes y medidas estadísticas.",
    "about_obj_spec_2": "Emplear un modelo de probabilidad para establecer conclusiones sobre el estado, la extensión y la localización de los arrendamientos petroleros a partir de los resultados de muestra.",
    "about_obj_spec_3": "Deducir relaciones entre variables del registro del Kansas Geological Survey con el fin de realizar estimaciones.",
    "met_title": "METODOLOGÍA",
    "pop_title": "POBLACIÓN",
    "textual": "Textual:",
    "pop_text": "Todos los arrendamientos de petróleo y gas registrados en Kansas.",
    "symbolic": "Simbólico:",
    "ind_title": "INDIVIDUO",
    "ind_text": "Cada arrendamiento de petróleo y gas registrado en la base de datos.",
    "samp_title": "MUESTRA",
    "samp_text": "Un subconjunto representativo de arrendamientos de petróleo y gas en Kansas utilizados para el análisis estadístico del estudio.",
    "case_title": "CASO DE ESTUDIO",
    "case_text": "Cada arrendamiento de petróleo y gas registrado en el dataset.",
    "qualitative_vars": "Variables Cualitativas",
    "nominals": "Nominales",
    "ordinals": "Ordinales",
    "cap_op_status": "Estado Operacional",
    "quant_vars": "Variables Cuantitativas",
    "discretes": "Discretas",
    "continuous": "Continuas",
    "cap_lat": "Latitud",
    "cap_long": "Longitud",
    "cap_area": "Área",
    "table_vars_title": "TABLA DE VARIABLES",
    "open_doc": "Abrir Documento Completo",
    "table_indicators_title": "TABLA DE INDICADORES",
    "vars_title": "VARIABLES",
    "ds_title": "ESTADÍSTICA DESCRIPTIVA",
    "is_qual_vars": "Variables Cualitativas",
    "is_title": "ESTADÍSTICA INFERENCIAL",
    "reg_models_title": "MODELOS DE REGRESIÓN",
    "simple_reg_title": "REGRESIÓN SIMPLE",
    "reg_linear": "Regresión Lineal",
    "reg_potential": "Regresión Potencial",
    "reg_exponential": "Regresión Exponencial",
    "reg_logarithmic": "Regresión Logarítmica",
    "reg_polynomial": "Regresión Polinómica",
    "multiple_reg_title": "REGRESIÓN MÚLTIPLE",
    "reg_multiple_3d": "Regresión Múltiple 3D",
    "ml_title": "MACHINE LEARNING",
    "ml_intro": "Uso de Machine Learning para la Predicción de Profundidad y Producción de Arrendamientos",
    "ml_problem_title": "PLANTEAMIENTO DEL PROBLEMA",
    "ml_problem_text": "El análisis de datos geoespaciales mediante Machine Learning permite procesar grandes volúmenes de registros históricos para predecir variables operativas críticas en los arrendamientos de Kansas.",
    "ml_obj_title": "OBJETIVO",
    "ml_obj_text": "Desarrollar modelos de Machine Learning basados en redes neuronales que permitan clasificar y predecir parámetros operativos a partir de datos del Kansas Geological Survey.",
    "ml_method_title": "METODOLOGÍA",
    "ml_model_title": "MODELO",
    "ml_colab_header": "Explora en Google Colab",
    "ml_colab_desc": "Haz clic en los siguientes botones para acceder a los cuadernos interactivos.",
    "ml_notebook_reg": "Notebook de Regresión",
    "ml_notebook_class": "Notebook de Clasificación",
    "ml_conclusion_title": "CONCLUSIÓN",
    "ml_conclusion_text": "Se ha logrado implementar modelos de Machine Learning capaces de analizar y predecir variables clave de los arrendamientos en Kansas.",
    "about_us_title": "Sobre Nosotros",
    "about_p1": "Somos estudiantes de segundo semestre de la Universidad Central del Ecuador, pertenecientes a la Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA), en la carrera de Ingeniería en Petróleos. En el marco de la asignatura de Estadística, presentamos este proyecto con el objetivo de ofrecer información clara, pertinente y accesible para quienes se interesan en esta área del conocimiento.",
    "about_p2": "Como futuros profesionales, aspiramos a formarnos como ingenieros comprometidos, preparados y apasionados, capaces de contribuir al desarrollo de una industria que avanza de manera constante gracias a la innovación tecnológica y al estudio científico de las energías sostenibles.",
    "about_p3": "Confiamos en el valor del aprendizaje conjunto y en la importancia de compartir saberes. Por ello, este trabajo no solo constituye un componente de nuestra formación académica, sino también un aporte para fomentar una comprensión más sólida de un campo tan dinámico y relevante en el contexto actual.",
    "about_us_sub": "Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental · UCE.",
    "team_title": "Nuestro Equipo",
    "team_intro": "A continuación tienes disponible los curriculum vitae de cada uno de los integrantes que conforman este grupo de trabajo.",
    "uc_title": "En construcción",
    "tools_title": "RECURSOS E INFRAESTRUCTURA",
    "tools_sub": "Ecosistema operativo para el procesamiento de datos geoespaciales y modelado estadístico.",
    "tools_list_title": "HERRAMIENTAS UTILIZADAS",
    "bot_default": "No estoy seguro de cómo responder eso. Puedes escribirme: 'proyecto', 'variables', 'metodología', 'regresión', 'machine learning', 'herramientas' o 'contacto'.",
    "bot_welcome": "¡Hola! Soy el Asistente de Arrendamientos de Kansas 🤖. ¿Qué deseas consultar hoy?",
    "bot_resp_var": "Las variables incluyen <b>cualitativas</b> y <b>cuantitativas</b>. Puedes verlas en detalle aquí: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>Ver Tabla de Variables</b></a>",
    "bot_resp_met": "La metodología se basa en la <b>recolección de datos</b>. Detalles completos en la sección: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>Ver Metodología</b></a>",
    "bot_resp_reg": "Aplicamos regresiones <b>simples</b> y <b>múltiple 3D</b>. Accede a los resultados aquí: <a href='#' onclick='document.getElementById(\"regression-models-link\").click(); return false;'><b>Ver Modelos</b></a>",
    "bot_resp_team": "El equipo es: <b>Almeida Fernando, Araujo Valeska, Baldeón Ariel y Quinchiguango Leslye</b>. <a href='#' onclick='document.getElementById(\"about-us-link\").click(); return false;'><b>Sobre Nosotros</b></a>",
    "bot_resp_tools": "Usamos un ecosistema de <b>RStudio, Colab, LaTeX, QGIS, ArcGIS</b>. <a href='#' onclick='document.getElementById(\"tools-link\").click(); return false;'><b>Ver herramientas</b></a>",
    "bot_resp_ml": "Aplicamos <b>modelos predictivos</b> para analizar la producción y profundidad de los pozos.<br><br><a href='#' onclick='document.getElementById(\"machine-learning-link\").click(); return false;'><b>Ir al apartado de Machine Learning</b></a>",
    "bot_resp_location": "Nuestra facultad FIGEMPA - UCE se encuentra ubicada en Quito, Ecuador. Puedes ver el mapa exacto aquí: <a href='https://maps.app.goo.gl/PGQm7XdXVJP5Tp6A6' target='_blank'><b>📍 Ver en Google Maps</b></a>",
    "bot_resp_map": "Puedes ver el mapa interactivo aquí: <a href='#' onclick='document.getElementById(\"interactive-map-link\").click(); return false;'><b>Ir al Mapa</b></a>",
    "bot_resp_intro": "Este proyecto analiza los <b>arrendamientos de petróleo y gas en Kansas</b> utilizando datos oficiales de KGS. <a href='#' onclick='document.getElementById(\"about-proyect-link\").click(); return false;'><b>Ver Introducción</b></a>",
    "bot_contact": "¡Claro! Puedes escribirnos directamente a nuestro WhatsApp: <a href='https://wa.me/593994537842' target='_blank'><b>💬 Hablar con el equipo</b></a>",
    "btn_intro": "Sobre el Proyecto",
    "btn_vars": "Variables",
    "btn_ml": "Machine Learning",
    "btn_location": "Ubicación",
    "btn_contact": "Hablar con el equipo",
    "location_title": "NUESTRA UBICACIÓN",
    "location_subtitle": "Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA)",
    "location_address": "Av. Universitaria, Quito 170129, Ecuador",
    "tools_description": "Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis y desarrollo como Posit Cloud, RStudio, Google Colab, VS Code y LaTeX, junto con lenguajes clave como HTML5, CSS y JavaScript. Complementamos este flujo de trabajo accediendo a datos científicos de Kaggle, NASA, Copernicus, OpenTopography y el servicio de cambio climático de ECMWF, mientras que para el análisis geoespacial y la identificación de derrames utilizamos QGIS, ArcGIS y Google Earth. Finalmente, aseguramos la productividad y difusión de resultados mediante herramientas colaborativas como GitHub, Google Drive, RPubs, Microsoft Teams y la suite de Office, impulsando así un enfoque moderno, eficiente y de alta precisión.",
    "pop_symbolic": "U = {x ∣ x ∈ Arrendamientos de Petróleo y Gas ∧ Ubicación(x) ∈ \"Kansas\"}",
    "ind_symbolic": "X<sub>i</sub> donde i = 1, 2, 3, 4, ..., +∞",
    "samp_symbolic": "M = {x ∣ x ∈ Arrendamientos de Petróleo y Gas ∧ Ubicación(x) ∈ \"Kansas\" ∧ Sistema(x) ∈ \"KGS\"}",
    "case_symbolic": "X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 47758",
    "map_eyebrow": "Visualización Geoespacial",
    "map_sub": "Explora los arrendamientos de petróleo y gas en Kansas. Visualiza la distribución geográfica y consulta registros.",
    "map_stat_plants": "concesiones registradas",
    "map_stat_coverage": "Cobertura <strong>nacional</strong>",
    "map_stat_filters": "Filtros por <strong>estado operativo</strong>",
    "map_source": "Datos obtenidos de Kansas Geological Survey · Procesados con R y QGIS",
    "about_intro_sub": "Contexto del proyecto, planteamiento del problema, mapa geográfico y objetivos del análisis estadístico.",
    "ds_sub": "Metodología, tabla de variables, indicadores y distribución de cada variable cualitativa y cuantitativa del dataset.",
    "is_sub": "Pruebas de hipótesis y análisis inferencial aplicado a los arrendamientos de petróleo y gas.",
    "reg_sub": "Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D.",
    "highlights_title_1": "Resultados Globales de KGS",
    "highlights_title_2": "Alcance e Impacto del Proyecto",
    "hl_stat_1_val": "47,757",
    "hl_stat_1_lab": "Registros de Concesiones",
    "hl_stat_2_val": "5",
    "hl_stat_2_lab": "Modelos de Regresión",
    "hl_stat_3_val": "ML",
    "hl_stat_3_lab": "Predicción Avanzada",
    "hl_stat_4_val": "R",
    "hl_stat_4_lab": "Computación Científica",
    "hl_stat_5_val": "2026",
    "hl_stat_5_lab": "Año del Proyecto",
    "hl_stat_6_val": "Kansas",
    "hl_stat_6_lab": "Integración KGS",
    "hl_stat_7_val": "12+",
    "hl_stat_7_lab": "Herramientas Geoespaciales",
    "hl_stat_8_val": "100%",
    "hl_stat_8_lab": "Enfoque Académico",
    "vars_landing_eyebrow": "Categorización de Datos",
    "vars_landing_title": "Nuestros Tipos de Variables",
    "vars_landing_lead": "Explora la clasificación técnica del dataset de arrendamientos.",
    "vars_qual_title": "Variables Cualitativas",
    "vars_quant_title": "Variables Cuantitativas",
    "view_more": "Ver Detalles",
    "cap_produce_petr_leo": "Produce Petróleo",
    "cap_produce_gas": "Produce Gas",
    "cap_nombre_del_operador": "Nombre del Operador",
    "cap_nombre_del_campo": "Nombre del Campo",
    "cap_formaci_n_productora": "Formación Productora",
    "cap_fuente_de_coordenadas": "Fuente de Coordenadas",
    "cap_direcci_n_township": "Dirección Township",
    "cap_direcci_n_range": "Dirección Range",
    "cap_nivel_de_producci_n": "Nivel de Producción",
    "cap_nivel_de_profundidad": "Nivel de Profundidad",
    "cap_etapa_de_vida": "Etapa de Vida",
    "cap_nivel_de_producci_n_promedio": "Nivel de Producción Promedio",
    "cap_a_os_activo": "Años Activo",
    "cap_secci_n": "Sección",
    "cap_c_digo_de_condado": "Código de Condado",
    "cap_c_digo_de_estado": "Código de Estado",
    "cap_township": "Township",
    "cap_range": "Range",
    "cap_profundidad_del_pozo": "Profundidad del Pozo",
    "cap_producci_n_acumulada": "Producción Acumulada",
    "cap_producci_n_promedio_anual": "Producción Promedio Anual",
    "cap_latitud": "Latitud",
    "cap_longitud": "Longitud",
    "cap_id_pozo": "Identificador del Pozo",
    "table_panel_title_vars": "Tabla de Variables",
    "table_panel_subtitle_vars": "Dataset &middot; Oil &amp; Gas Leases (KGS)",
    "table_panel_badge_vars": "24 Variables",
    "table_panel_badge_kgs": "KGS",
    "table_vars_source": "Fuente: Elaboración propia a partir de datos de Kansas Geological Survey (KGS), 2026.",
    "table_panel_title_inds": "Tabla de Indicadores",
    "table_panel_subtitle_inds": "Indicadores estad&iacute;sticos &middot; An&aacute;lisis descriptivo",
    "table_panel_badge_stats": "Estadísticos",
    "table_panel_badge_desc": "Descriptivos",
    "table_inds_source": "Fuente: Análisis estadístico del equipo FIGEMPA &middot; UCE 2026",
    "vars_qual_lead": "Clasificación de atributos no numéricos que definen la procedencia técnica y operativa.",
    "vars_quant_lead": "Mediciones numéricas y parámetros operativos extraídos de la base de datos de arrendamientos.",
    "var_cat_nominal_desc": "Sin orden jerárquico",
    "var_cat_nom": "Nominales",
    "var_cat_ord": "Ordinales",
    "var_cat_con": "Continuas",
    "var_cat_dis": "Discretas",
    "var_cat_ordinal_desc": "Con orden jerárquico definido",
    "var_cat_discrete_desc": "Valores contables enteros",
    "var_cat_continuous_desc": "Valores medibles con decimales",
    "tag_nominal": "Nominal",
    "tag_ordinal": "Ordinal",
    "tag_discrete": "Discreta",
    "tag_continuous": "Continua",
    "cap_op_status": "Estado Operacional",
    "cap_nombre_del_operador": "Nombre del Operador",
    "cap_nombre_del_campo": "Nombre del Campo",
    "cap_formaci_n_productora": "Formación Productora",
    "cap_fuente_de_coordenadas": "Fuente de Coordenadas",
    "cap_direcci_n_township": "Dirección Township",
    "cap_direcci_n_range": "Dirección Range",
    "cap_nivel_de_producci_n": "Nivel de Producción",
    "cap_nivel_de_profundidad": "Nivel de Profundidad",
    "cap_etapa_de_vida": "Etapa de Vida",
    "cap_nivel_de_producci_n_promedio": "Nivel de Producción Promedio",
    "cap_a_os_activo": "Años Activo",
    "cap_secci_n": "Sección",
    "cap_c_digo_de_condado": "Código de Condado",
    "cap_c_digo_de_estado": "Código de Estado",
    "cap_township": "Township",
    "cap_range": "Range",
    "cap_profundidad_del_pozo": "Profundidad del Pozo",
    "cap_producci_n_acumulada": "Producción Acumulada",
    "cap_producci_n_promedio_anual": "Producción Promedio Anual"
  },
  en: {
    "nav_map": "Interactive Map",
    "nav_home": "Home",
    "nav_intro": "Introduction",
    "nav_problem": "Problem Statement",
    "nav_geo": "Geographical Location Map",
    "nav_obj": "Objectives",
    "nav_desc_stats": "Descriptive Statistics",
    "nav_methodology": "Methodology",
    "nav_vars_table": "Variable Tables",
    "nav_vars": "Variables",
    "nav_inf_stats": "Inferential Statistics",
    "nav_reg_models": "Regression Models",
    "nav_ml": "Machine Learning",
    "nav_more": "More",
    "nav_tools": "Infrastructure",
    "nav_about": "About Us",
    "hero_title_centered": "STATISTICAL ANALYSIS OF OIL AND GAS LEASES IN KANSAS",
    "hero_lead_centered": "Statistical data analysis, applying descriptive and inferential methods using R language in RStudio",
    "motivaciones_text": "As students of the Central University of Ecuador, we developed this project to apply statistics as a fundamental tool in data analysis. Our goal is not only to interpret information but also to highlight the relevance of statistics in informed decision-making within the professional field related to our career.",
    "footer_copy": "COPYRIGHT © 2026, GROUP 1 - STATISTICS AND PROBABILITY.",
    "footer_uce": "CENTRAL UNIVERSITY OF ECUADOR - FIGEMPA",
    "footer_rights": "ALL RIGHTS RESERVED.",
    "chat_title": "Leases Assistant 🤖",
    "chat_send": "Send",
    "important_title": "IMPORTANT!",
    "important_text": "This project is exclusively academic and is under continuous development. The data and analysis presented are used solely for educational purposes.",
    "mision_vision_title": "MISSION - VISION",
    "mision_title": "Mission",
    "mision_text": "Apply statistical methods to analyze and quantify the characteristics, distribution, and status of oil and gas leases in Kansas.",
    "vision_title": "Vision",
    "vision_text": "To become a reference statistical analysis that enables understanding of the trends, distribution, and management of oil and gas leases in Kansas, supporting decision-making in the energy sector.",
    "motivaciones_title": "PROJECT MOTIVATIONS",
    "map_title": "OIL & GAS LEASES INTERACTIVE MAP",
    "about_intro_title": "INTRODUCTION",
    "about_problem_title": "PROBLEM STATEMENT",
    "about_problem_p1": "Oil and gas leases in Kansas represent areas where landowners have leased mineral rights for the exploration, drilling, and production of oil and gas. The analysis of this information is important because it allows for evaluating the distribution of these concessions, facilitating the identification of patterns in contract locations, their operational status, and the extent of the leased areas.",
    "about_problem_p2": "The study of this data, applying statistical methodologies and tools, makes it possible to summarize and compare existing information in order to detect trends, analyze the concentration of leases in the state of Kansas and, consequently, better understand how energy resources linked to these activities are managed.",
    "about_map_title": "GEOGRAPHIC LOCATION MAP",
    "about_obj_title": "OBJECTIVES",
    "about_obj_gen_header": "General Objective:",
    "about_obj_gen_text": "To apply statistics and Machine Learning techniques to analyze recorded oil and gas leases in Kansas.",
    "about_obj_spec_header": "Specific Objectives:",
    "about_obj_spec_1": "To understand the current state of oil and gas leases in Kansas through their most important characteristics and statistical measures.",
    "about_obj_spec_2": "To use a probability model to draw conclusions about the status, extent, and location of oil and gas leases based on sample results.",
    "about_obj_spec_3": "To deduce relationships between variables from the Kansas Geological Survey record in order to make estimations.",
    "met_title": "METHODOLOGY",
    "pop_title": "POPULATION",
    "textual": "Textual:",
    "pop_text": "All oil and gas leases registered in Kansas.",
    "symbolic": "Symbolic:",
    "ind_title": "INDIVIDUAL",
    "ind_text": "Each oil and gas lease recorded in the database.",
    "samp_title": "SAMPLE",
    "samp_text": "A representative subset of oil and gas leases in Kansas used for the statistical analysis of the study.",
    "case_title": "CASE STUDY",
    "case_text": "Each oil and gas lease recorded in the dataset.",
    "qualitative_vars": "Qualitative Variables",
    "nominals": "Nominals",
    "ordinals": "Ordinals",
    "quant_vars": "Quantitative Variables",
    "discretes": "Discrete",
    "continuous": "Continuous",
    "cap_produce_petr_leo": "Produces Oil",
    "cap_produce_gas": "Produces Gas",
    "cap_nombre_del_operador": "Operator Name",
    "cap_nombre_del_campo": "Field Name",
    "cap_formaci_n_productora": "Producing Formation",
    "cap_fuente_de_coordenadas": "Coordinate Source",
    "cap_direcci_n_township": "Township Direction",
    "cap_direcci_n_range": "Range Direction",
    "cap_nivel_de_producci_n": "Production Level",
    "cap_nivel_de_profundidad": "Depth Level",
    "cap_etapa_de_vida": "Life Stage",
    "cap_nivel_de_producci_n_promedio": "Avg Production Level",
    "cap_a_os_activo": "Years Active",
    "cap_secci_n": "Section",
    "cap_c_digo_de_condado": "County Code",
    "cap_c_digo_de_estado": "State Code",
    "cap_township": "Township",
    "cap_range": "Range",
    "cap_profundidad_del_pozo": "Well Depth",
    "cap_producci_n_acumulada": "Cumulative Production",
    "cap_producci_n_promedio_anual": "Avg Annual Production",
    "cap_latitud": "Latitude",
    "cap_longitud": "Longitude",
    "cap_id_pozo": "Well Identifier",
    "cap_area": "Area",
    "table_vars_title": "VARIABLES TABLE",
    "open_doc": "Open Full Document",
    "table_indicators_title": "INDICATORS TABLE",
    "vars_title": "VARIABLES",
    "ds_title": "DESCRIPTIVE STATISTICS",
    "is_qual_vars": "Qualitative Variables",
    "is_title": "INFERENTIAL STATISTICS",
    "reg_models_title": "REGRESSION MODELS",
    "simple_reg_title": "SIMPLE REGRESSION",
    "reg_linear": "Linear Regression",
    "reg_potential": "Potential Regression",
    "reg_exponential": "Exponential Regression",
    "reg_logarithmic": "Logarithmic Regression",
    "reg_polynomial": "Polynomial Regression",
    "multiple_reg_title": "MULTIPLE REGRESSION",
    "reg_multiple_3d": "Multiple Regression 3D",
    "ml_title": "MACHINE LEARNING",
    "ml_intro": "Use of Machine Learning for Lease Depth and Production Prediction",
    "ml_problem_title": "PROBLEM STATEMENT",
    "ml_problem_text": "Geospatial data analysis through Machine Learning allows for processing large volumes of historical records to predict critical operational variables in Kansas leases, optimizing technical planning and energy resource management.",
    "ml_obj_title": "OBJECTIVE",
    "ml_obj_text": "Develop neural network-based Machine Learning models that allow for classifying and predicting operational parameters from Kansas Geological Survey data, providing high-precision tools for the energy sector.",
    "ml_method_title": "METODOLOGY",
    "ml_model_title": "MODEL",
    "ml_colab_header": "Explore in Google Colab",
    "ml_colab_desc": "Click the following buttons to access the interactive notebooks.",
    "ml_notebook_reg": "Regression Notebook",
    "ml_notebook_class": "Classification Notebook",
    "ml_conclusion_title": "CONCLUSION",
    "ml_conclusion_text": "Machine Learning models capable of analyzing and predicting key lease variables in Kansas have been successfully implemented. This approach optimizes accuracy in resource evaluation and possesses a high capacity for scalability in energy concession analysis.",
    "about_us_title": "About Us",
    "about_p1": "We are second-semester students at the Central University of Ecuador, belonging to the Faculty of Engineering in Geology, Minas, Petroleum, and Environmental (FIGEMPA), in the Petroleum Engineering program. Within the framework of the Statistics course, we present this project with the goal of offering clear, pertinent, and accessible information for those interested in this area of knowledge.",
    "about_p2": "As future professionals, we aspire to be trained as committed, prepared, and passionate engineers, capable of contributing to the development of an industry that advances constantly thanks to technological innovation and the scientific study of sustainable energies.",
    "about_p3": "We trust in the value of joint learning and the importance of sharing knowledge. Therefore, this work not only constitutes a component of our academic training but also a contribution to fostering a more solid understanding of a field as dynamic and relevant in the current context.",
    "about_us_sub": "Faculty of Engineering in Geology, Mines, Petroleum, and Environmental · UCE.",
    "team_title": "Our Team",
    "team_intro": "Below you have available the resumes of each of the members who make up this working group.",
    "uc_title": "Under Construction",
    "tools_title": "RESOURCES & TOOLS",
    "tools_sub": "Operational ecosystem for geospatial data processing and statistical modeling.",
    "tools_list_title": "TOOLS USED",
    "bot_default": "I'm not sure how to answer that. You can write: 'project', 'variables', 'methodology', 'regression', 'machine learning', 'tools', or 'contact'.",
    "bot_welcome": "Hello! I am the Leases Assistant 🤖. What would you like to consult today?",
    "bot_resp_var": "Variables include <b>qualitative</b> and <b>quantitative</b> types. You can see them in detail here: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>View Variable Table</b></a>",
    "bot_resp_met": "The methodology is based on <b>data collection</b>. Full details in the section: <a href='#' onclick='document.getElementById(\"descriptive-statistics-link\").click(); return false;'><b>View Methodology</b></a>",
    "bot_resp_reg": "We apply <b>simple</b> and <b>multiple 3D</b> regressions. Access the results here: <a href='#' onclick='document.getElementById(\"regression-models-link\").click(); return false;'><b>View Models</b></a>",
    "bot_resp_team": "The team is: <b>Almeida Fernando, Araujo Valeska, Baldeón Ariel, and Quinchiguango Leslye</b>. <a href='#' onclick='document.getElementById(\"about-us-link\").click(); return false;'><b>About Us</b></a>",
    "bot_resp_tools": "We use an ecosystem of <b>RStudio, Colab, LaTeX, QGIS, ArcGIS</b>. <a href='#' onclick='document.getElementById(\"tools-link\").click(); return false;'><b>View tools</b></a>",
    "bot_resp_ml": "We apply <b>predictive models</b> to analyze well production and depth.<br><br><a href='#' onclick='document.getElementById(\"machine-learning-link\").click(); return false;'><b>Go to Machine Learning section</b></a>",
    "bot_resp_location": "Our faculty FIGEMPA - UCE is located in Quito, Ecuador. You can find the exact location here: <a href='https://maps.app.goo.gl/PGQm7XdXVJP5Tp6A6' target='_blank'><b>📍 View on Google Maps</b></a>",
    "bot_resp_map": "You can view the interactive map here: <a href='#' onclick='document.getElementById(\"interactive-map-link\").click(); return false;'><b>Go to Map</b></a>",
    "bot_resp_intro": "This project analyzes <b>oil and gas leases in Kansas</b> using official KGS data. <a href='#' onclick='document.getElementById(\"about-proyect-link\").click(); return false;'><b>View Introduction</b></a>",
    "bot_contact": "Sure! You can write to us directly on our WhatsApp: <a href='https://wa.me/593994537842' target='_blank'><b>💬 Talk to the team</b></a>",
    "btn_intro": "About the Project",
    "btn_vars": "Variables",
    "btn_ml": "Machine Learning",
    "btn_location": "Location",
    "btn_contact": "Talk to the team",
    "location_title": "OUR LOCATION",
    "location_subtitle": "Faculty of Engineering in Geology, Mines, Petroleum, and Environmental (FIGEMPA)",
    "location_address": "Av. Universitaria, Quito 170129, Ecuador",
    "tools_description": "For the development of our project, we employed an advanced technological ecosystem that integrates analysis and development platforms such as Posit Cloud, RStudio, Google Colab, VS Code, and LaTeX, along with key languages ​​like HTML5, CSS, and JavaScript. We complemented this workflow by accessing scientific data from Kaggle, NASA, Copernicus, OpenTopography, and the ECMWF Climate Change Service, while for geospatial analysis and spill identification, we used QGIS, ArcGIS, and Google Earth. Finally, we ensured productivity and dissemination of results through collaborative tools such as GitHub, Google Drive, RPubs, Microsoft Teams, and the Office suite, thus fostering a modern, efficient, and highly accurate approach.",
    "pop_symbolic": "U = {x ∣ x ∈ Oil and Gas Leases ∧ Location(x) ∈ \"Kansas\"}",
    "ind_symbolic": "X<sub>i</sub> where i = 1, 2, 3, 4, ..., +∞",
    "samp_symbolic": "M = {x ∣ x ∈ Oil and Gas Leases ∧ Location(x) ∈ \"Kansas\" ∧ System(x) ∈ \"KGS\"}",
    "case_symbolic": "X<sub>i</sub> where i = 1, 2, 3, 4, ..., 47758",
    "map_eyebrow": "Geospatial Visualization",
    "map_sub": "Explore oil and gas leases in Kansas. Visualize geographic distribution and query records for a comprehensive understanding of the landscape.",
    "map_stat_plants": "registered leases",
    "map_stat_coverage": "<strong>National</strong> coverage",
    "map_stat_filters": "Filters by <strong>operational status</strong>",
    "map_source": "Data from Kansas Geological Survey · Processed with R and QGIS",
    "about_intro_sub": "Project context, problem statement, geographic map, and objectives of the statistical analysis.",
    "ds_sub": "Methodology, variable tables, indicators, and distribution of each qualitative and quantitative variable in the dataset.",
    "is_sub": "Hypothesis testing and inferential analysis applied to oil and gas lease variables.",
    "reg_sub": "Simple regressions (linear, potential, exponential, logarithmic, and polynomial) and 3D multiple regression.",
    "highlights_title_1": "Global KGS Results",
    "highlights_title_2": "Project Scope and Impact",
    "hl_stat_1_val": "47,757",
    "hl_stat_1_lab": "Lease Records",
    "hl_stat_2_val": "5",
    "hl_stat_2_lab": "Regression Models",
    "hl_stat_3_val": "ML",
    "hl_stat_3_lab": "Advanced Prediction",
    "hl_stat_4_val": "R",
    "hl_stat_4_lab": "Scientific Computing",
    "hl_stat_5_val": "2026",
    "hl_stat_5_lab": "Project Year",
    "hl_stat_6_val": "Kansas",
    "hl_stat_6_lab": "KGS Integration",
    "hl_stat_7_val": "12+",
    "hl_stat_7_lab": "Geospatial Tools",
    "hl_stat_8_val": "100%",
    "hl_stat_8_lab": "Academic Focus",
    "vars_landing_eyebrow": "Data Categorization",
    "vars_landing_title": "Our Variable Types",
    "vars_landing_lead": "Explore the technical classification of the dataset of leases.",
    "vars_qual_title": "Qualitative Variables",
    "vars_quant_title": "Quantitative Variables",
    "view_more": "View Details",
    "cap_produce_petr_leo": "Produces Oil",
    "cap_produce_gas": "Produces Gas",
    "cap_nivel_de_producci_n": "Production Level",
    "cap_etapa_de_vida": "Life Stage",
    "cap_a_os_activo": "Years Active",
    "cap_profundidad_del_pozo": "Well Depth",
    "cap_producci_n_acumulada": "Cumulative Production",
    "table_panel_title_vars": "VARIABLES TABLE",
    "table_panel_subtitle_vars": "Dataset &middot; Oil &amp; Gas Leases (KGS)",
    "table_panel_badge_vars": "24 Variables",
    "table_panel_badge_kgs": "KGS",
    "table_vars_source": "Source: Own elaboration based on Kansas Geological Survey (KGS) data, 2026.",
    "table_panel_title_inds": "INDICATORS TABLE",
    "table_panel_subtitle_inds": "Statistical indicators &middot; Descriptive analysis",
    "table_panel_badge_stats": "Statistics",
    "table_panel_badge_desc": "Descriptive",
    "table_inds_source": "Source: Statistical analysis by FIGEMPA team &middot; UCE 2026",
    "footer_uce": "CENTRAL UNIVERSITY OF ECUADOR - FIGEMPA",
    "vars_qual_lead": "Classification of non-numeric attributes that define technical and operational origin.",
    "vars_quant_lead": "Numeric measurements and operational parameters extracted from the lease database.",
    "var_cat_nominal_desc": "No hierarchical order",
    "var_cat_nom": "Nominals",
    "var_cat_ord": "Ordinals",
    "var_cat_con": "Continuous",
    "var_cat_dis": "Discrete",
    "var_cat_ordinal_desc": "Defined hierarchical order",
    "var_cat_discrete_desc": "Integer countable values",
    "var_cat_continuous_desc": "Measurable values with decimals",
    "tag_nominal": "Nominal",
    "tag_ordinal": "Ordinal",
    "tag_discrete": "Discrete",
    "tag_continuous": "Continuous",
    "cap_op_status": "Operational Status",
    "cap_nombre_del_operador": "Operator Name",
    "cap_nombre_del_campo": "Field Name",
    "cap_formaci_n_productora": "Producing Formation",
    "cap_fuente_de_coordenadas": "Coordinate Source",
    "cap_direcci_n_township": "Township Direction",
    "cap_direcci_n_range": "Range Direction",
    "cap_nivel_de_producci_n": "Production Level",
    "cap_nivel_de_profundidad": "Depth Level",
    "cap_etapa_de_vida": "Life Stage",
    "cap_nivel_de_producci_n_promedio": "Avg Production Level",
    "cap_a_os_activo": "Years Active",
    "cap_secci_n": "Section",
    "cap_c_digo_de_condado": "County Code",
    "cap_c_digo_de_estado": "State Code",
    "cap_township": "Township",
    "cap_range": "Range",
    "cap_producci_n_promedio_anual": "Avg Annual Production",
    "cap_latitud": "Latitude",
    "cap_longitud": "Longitude",
    "cap_id_pozo": "Well Identifier"
  }
};

let currentLang = 'es';
localStorage.setItem('lang', currentLang);

const htmlKeys = ['bot_resp_var', 'bot_resp_met', 'bot_resp_reg', 'bot_resp_team', 'bot_resp_tools', 'bot_resp_ml', 'bot_resp_map', 'bot_resp_intro', 'bot_contact', 'about_problem_p2', 'ind_symbolic', 'case_symbolic', 'map_stat_coverage', 'map_stat_filters', 'map_stat_plants', 'table_panel_subtitle_vars', 'table_panel_subtitle_inds', 'table_inds_source', 'table_vars_source'];

function translateUI() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[currentLang] && translations[currentLang][key];
    if (text) {
      if (htmlKeys.includes(key)) {
        el.innerHTML = text;
      } else {
        let textNodeFound = false;
        for (let i = 0; i < el.childNodes.length; i++) {
          if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].nodeValue.trim() !== '') {
            el.childNodes[i].nodeValue = text;
            textNodeFound = true;
            break;
          }
        }
        if (!textNodeFound) {
          el.textContent = text;
        }
      }
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'langToggle') {
    currentLang = (currentLang === 'es') ? 'en' : 'es';
    localStorage.setItem('lang', currentLang);
    translateUI();

    const chatbotModal = document.getElementById('chatbotModal');
    const chatbox = document.getElementById('chatbox');
    if (chatbotModal && chatbotModal.style.display === 'block' && chatbox) {
      chatbox.innerHTML = '';
      if (window.showOptions) {
        window.showOptions();
      }
    }
  }
});

/* -------------------------------------------------------------------------- */
/* TU CÓDIGO ORIGINAL                                */
/* -------------------------------------------------------------------------- */
const body = document.querySelector("body");
const homeLink = document.querySelector("#home-link");
const interactiveMapLink = document.querySelector("#interactive-map-link");
const aboutProyectLink = document.querySelector("#about-proyect-link");
const descriptiveStatisticsLink = document.querySelector("#descriptive-statistics-link");
const inferentialStatisticsLink = document.querySelector("#inferential-statistics-link");
const regressionModelsLink = document.querySelector('#regression-models-link');
const machineLearningLink = document.querySelector('#machine-learning-link');
const toolsLink = document.querySelector('#tools-link');
const aboutUsLink = document.querySelector("#about-us-link");
const underConstructionLinks = document.querySelectorAll(".under-construction");
const mainElement = document.querySelector("main");
const header = document.querySelector(".header");
const menuBtn = document.querySelector("#menu-btn");
const topBar = document.querySelector("#top-bar");
const middleBar = document.querySelector("#middle-bar");
const bottomBar = document.querySelector("#bottom-bar");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navlink");
const navLinksDropDown = document.querySelectorAll(".navlink-deploy");
const navlProjectLinks = document.querySelectorAll(".navl-project");
const navlDSLinks = document.querySelectorAll(".navl-ds");
const heroVideoWrap = document.querySelector(".hero-video-wrap");

const windowWidth = window.innerWidth;

/* ── Utility: change page content with animation + active nav highlight ── */
function setPage(html, activeLinkId) {
  // Fade-out then swap content
  mainElement.style.opacity = '0';
  mainElement.style.transform = 'translateY(8px)';
  mainElement.style.transition = 'opacity .18s ease, transform .18s ease';

  setTimeout(() => {
    mainElement.setAttribute("style",
      `margin-top:${header.offsetHeight + 10}px; opacity:0; transform:translateY(8px); transition:opacity .18s ease,transform .18s ease;`);
    mainElement.innerHTML = html;
    translateUI();

    // Fade-in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        mainElement.style.opacity = '1';
        mainElement.style.transform = 'translateY(0)';
      });
    });
  }, 150);

  // Mark active nav link
  document.querySelectorAll('.navlink').forEach(l => l.classList.remove('navlink--active'));
  if (activeLinkId) {
    const activeEl = document.getElementById(activeLinkId);
    if (activeEl) activeEl.classList.add('navlink--active');
  }
}


// Hamburguer menu code
const toggleHamburguerMenuClases = () => {
  topBar.classList.toggle("convert-x-1");
  topBar.classList.toggle("convert-bars");
  middleBar.classList.toggle("hidden");
  middleBar.classList.toggle("visible");
  bottomBar.classList.toggle("convert-x-2");
  bottomBar.classList.toggle("convert-bars");
  navbar.classList.toggle("show-menu");
};

const resetDropDownMenu = () => {
  navLinksDropDown.forEach(link => {
    const paintedElement = link;
    const nestedList = link.nextElementSibling;
    const arrowImg = link.firstElementChild;

    paintedElement.classList.remove("selected-menu-option");
    nestedList.classList.remove("show-nested-menu");
    arrowImg.classList.remove("rotate-arrow");
  });
}

menuBtn.addEventListener("click", () => {
  resetDropDownMenu();
  toggleHamburguerMenuClases();
});

navLinks.forEach(link => (
  link.addEventListener("click", (e) => {

    if (windowWidth < 1024) {
      const idLink = e.target.id;
      const classElements = [...e.target.classList];
      if (idLink === "descriptive-statistics-link"
        || idLink === "about-proyect-link"
        || idLink === "more-link"
        || classElements.includes('navitem-arrow')) {
        return
      }
    }

    const targetLink = [...e.target.classList];
    if (targetLink.includes('navlink-inside')) {
      resetDropDownMenu();
    }

    resetDropDownMenu();
    toggleHamburguerMenuClases();
  })
));

navLinksDropDown.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (windowWidth < 1024) {
      const classElements = [...e.target.classList];
      let linkElement = null;
      let nestedList = null;
      let arrowImg = null;
      if (classElements.includes('navitem-arrow')) {
        linkElement = e.target.parentElement;
        nestedList = linkElement.nextElementSibling;
        arrowImg = linkElement.firstElementChild;
      } else {
        linkElement = e.target;
        nestedList = e.target.nextElementSibling;
        arrowImg = e.target.firstElementChild;
      }
      linkElement.classList.toggle("selected-menu-option");
      nestedList.classList.toggle("show-nested-menu");
      arrowImg.classList.toggle("rotate-arrow");
      return;
    }

    const pcLinkElement = e.target.closest('.navlink-deploy');
    if (pcLinkElement) {
      if (pcLinkElement.id === "about-proyect-link") {
        setPage(aboutProyectCode, 'about-proyect-link');
      } else if (pcLinkElement.id === "descriptive-statistics-link") {
        setPage(descriptiveStatisticsCode, 'descriptive-statistics-link');
      } else if (pcLinkElement.id === "more-link") {
        setPage(underConstructionCode, 'more-link');
      }
    }
  });
});




/* ----------------------------
   HOME
---------------------------- */
// Adding new text to main content dynamicaly
const homeCode = `
  <section id="inicio" class="hero-video-wrap section-anchor" role="region" aria-label="Portada con video">
    <video autoplay muted loop id="heroVideo" class="hero-video">
      <source src="assets/videos/uce.mp4" type="video/mp4">
      Tu navegador no soporta el tag de video.
    </video>
    <div class="video-overlay"></div>
    <div class="hero-inner-centered">
      <style>
        .hero-title-main {
          font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 800;
          line-height: 1.06; letter-spacing: -.03em; color: #fff;
          margin: 0 0 20px; animation: heroFadeUp .7s ease .1s both;
          font-family: 'IBM Plex Sans','Inter',sans-serif; max-width: 680px;
          position: relative; z-index: 2;
        }
        .hero-accent-line {
          width: 56px; height: 4px; background: #1a4fdb;
          border-radius: 2px; margin: 0 0 22px;
          animation: heroFadeUp .7s ease .16s both;
          position: relative; z-index: 2;
        }
        .hero-lead-main {
          font-size: clamp(.95rem,2vw,1.12rem); color: rgba(255,255,255,.7);
          max-width: 540px; margin: 0 0 34px; line-height: 1.74;
          font-weight: 400; animation: heroFadeUp .7s ease .24s both;
          position: relative; z-index: 2;
        }
        .hero-ctas { display:flex; flex-wrap:wrap; gap:12px; animation: heroFadeUp .7s ease .32s both; position: relative; z-index: 2; }
        .hero-cta-primary {
          display:inline-flex; align-items:center; gap:8px;
          padding:.82rem 1.9rem; background:#1a4fdb; color:#fff;
          border:none; border-radius:6px; font-weight:700; font-size:.88rem;
          cursor:pointer; text-decoration:none; letter-spacing:.01em;
          transition:background .2s,transform .2s;
        }
        .hero-cta-primary:hover { background:#1440b8; transform:translateY(-1px); }
        .hero-cta-secondary {
          display:inline-flex; align-items:center; gap:8px;
          padding:.82rem 1.9rem; background:transparent; color:#fff;
          border:2px solid rgba(255,255,255,.4); border-radius:6px;
          font-weight:600; font-size:.88rem; cursor:pointer; text-decoration:none;
          transition:border-color .2s,background .2s;
        }
        .hero-cta-secondary:hover { border-color:rgba(255,255,255,.8); background:rgba(255,255,255,.07); }
        .hero-stats-bar {
          position:absolute; bottom:0; left:0; right:0;
          background:rgba(0,27,65,.88); backdrop-filter:blur(10px);
          border-top:1px solid rgba(255,255,255,.08);
          display:flex; justify-content:center; z-index:3;
        }
        .hero-stat-item {
          padding:1.1rem 2.8rem; text-align:center;
          border-right:1px solid rgba(255,255,255,.1);
        }
        .hero-stat-item:last-child { border-right:none; }
        .hero-stat-num { font-size:1.4rem; font-weight:800; color:#fff; display:block; letter-spacing:-.02em; }
        .hero-stat-label { font-size:.68rem; color:rgba(255,255,255,.45); text-transform:uppercase; letter-spacing:.1em; font-weight:600; }
        @keyframes heroFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      </style>
      <h1 class="hero-title-main" data-i18n="hero_title_centered">ANÁLISIS ESTADÍSTICO DE LOS ARRENDAMIENTOS DE PETRÓLEO Y GAS EN KANSAS</h1>
      <div class="hero-accent-line"></div>
      <p class="hero-lead-main" data-i18n="hero_lead_centered">Análisis estadístico de datos, aplicando métodos descriptivos e inferenciales con el uso del lenguaje R en RStudio</p>
      <div class="hero-ctas">
        <a href="#" class="hero-cta-primary" onclick="document.getElementById('about-proyect-link').click();return false;">
          <i class="fas fa-chevron-right"></i> Explorar Proyecto
        </a>
        <a href="#" class="hero-cta-secondary" onclick="document.getElementById('interactive-map-link').click();return false;">
          <i class="fas fa-map-marked-alt"></i> Ver Mapa
        </a>
      </div>
    </div>
  </section>

  <section class="important section-box" style="border-left:4px solid #f59e0b;background:#fffbf0;">
    <div style="display:flex;align-items:flex-start;gap:1rem;">
      <i class="fas fa-exclamation-triangle" style="color:#d97706;font-size:1.2rem;margin-top:3px;flex-shrink:0;"></i>
      <div>
        <h2 class="title-2" style="text-align:left;margin:0 0 .4rem;font-size:1.1rem;" data-i18n="important_title">¡IMPORTANTE!</h2>
        <p style="margin:0;color:#374151;font-size:.95rem;line-height:1.65;" data-i18n="important_text">Este proyecto tiene un carácter exclusivamente académico y se encuentra en continuo desarrollo. Los datos y análisis presentados se utilizan únicamente con fines educativos.</p>
      </div>
    </div>
  </section>

  <section class="mision-vision section-box">
    <h2 class="title-2" data-i18n="mision_vision_title">MISIÓN - VISIÓN</h2>
    <div class="section-divider"></div>
    <div class="mision-vision-container">
      <div class="mision">
        <h3 class="title-3" data-i18n="mision_title">Misión</h3>
        <p style="color:#374151;line-height:1.75;margin-top:.5rem;" data-i18n="mision_text">Aplicar métodos estadísticos para analizar y cuantificar las características, distribución y estado de los arrendamientos de petróleo y gas en Kansas.</p>
      </div>
      <div class="vision">
        <h3 class="title-3" data-i18n="vision_title">Visión</h3>
        <p style="color:#374151;line-height:1.75;margin-top:.5rem;" data-i18n="vision_text">Convertirnos en un análisis estadístico de referencia que permita comprender las tendencias, distribución y gestión de los arrendamientos de petróleo y gas en Kansas, apoyando la toma de decisiones en el ámbito energético.</p>
      </div>
    </div>
  </section>

  <section id="motivation" class="motivation section-box">
    <div class="card-box">
      <div class="motivation-text-container">
        <p style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.15em;color:#1a4fdb;margin:0 0 8px;">Sobre Nosotros</p>
        <h2 class="title-2" style="text-align:left;" data-i18n="motivaciones_title">MOTIVACIONES DEL PROYECTO</h2>
        <div class="section-divider" style="margin:0 0 1.5rem;"></div>
        <p style="color:#374151;line-height:1.78;" data-i18n="motivaciones_text">Como estudiantes de la Universidad Central del Ecuador, desarrollamos este proyecto con el propósito de aplicar la estadística como una herramienta fundamental en el análisis de datos.</p>
        <a href="https://www.uce.edu.ec/web/figempa" target="_blank" class="uce-figempa-link">UNIVERSIDAD CENTRAL DEL ECUADOR &nbsp;→</a>
      </div>
      <img src="assets/images/facultad.jpg" alt="FIGEMPA" class="motivation-img"/>
    </div>
  </section>

  <section class="highlights-section">
    <div class="highlights-container">
      <div class="highlights-row">
        <span class="highlights-row-title" data-i18n="highlights_title_1">Resultados Globales de KGS</span>
        <div class="highlights-grid">
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_1_val">47,757</span>
            <span class="highlight-label" data-i18n="hl_stat_1_lab">Registros de Concesiones</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_2_val">5</span>
            <span class="highlight-label" data-i18n="hl_stat_2_lab">Modelos de Regresión</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_3_val">ML</span>
            <span class="highlight-label" data-i18n="hl_stat_3_lab">Predicción Avanzada</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_4_val">R</span>
            <span class="highlight-label" data-i18n="hl_stat_4_lab">Computación Científica</span>
          </div>
        </div>
      </div>

      <div class="highlights-row">
        <span class="highlights-row-title" data-i18n="highlights_title_2">Alcance e Impacto del Proyecto</span>
        <div class="highlights-grid">
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_5_val">2026</span>
            <span class="highlight-label" data-i18n="hl_stat_5_lab">Año del Proyecto</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_6_val">Kansas</span>
            <span class="highlight-label" data-i18n="hl_stat_6_lab">Integración KGS</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_7_val">12+</span>
            <span class="highlight-label" data-i18n="hl_stat_7_lab">Herramientas Geoespaciales</span>
          </div>
          <div class="highlight-item">
            <span class="highlight-value" data-i18n="hl_stat_8_val">100%</span>
            <span class="highlight-label" data-i18n="hl_stat_8_lab">Enfoque Académico</span>
          </div>
        </div>
      </div>
    </div>
  </section>
`;


homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  mainElement.style.opacity = '0';
  setTimeout(() => {
    mainElement.innerHTML = homeCode;
    const videoWrapper = document.querySelector(".hero-video-wrap");
    if (videoWrapper) videoWrapper.setAttribute("style", `margin-top:${header.offsetHeight}px`);
    translateUI();
    mainElement.style.opacity = '1';
  }, 150);
  document.querySelectorAll('.navlink').forEach(l => l.classList.remove('navlink--active'));
  document.getElementById('home-link')?.classList.add('navlink--active');
});




/* ----------------------------
    INTERACTIVE MAP
---------------------------- */
const interactiveMapCode = `
      <style>
        .map-section-wrap {
          width: 100%;
          background: #f8fafc;
          padding-bottom: 60px;
          margin-top: ${header.offsetHeight}px;
        }
        .map-frame-bar-corp {
          background: #f1f5f9; padding: 12px 20px; border-bottom: 1px solid #e2e8f0;
          display: flex; align-items: center; gap: 12px;
        }
        .map-frame-dot { width: 10px; height: 10px; border-radius: 50%; background: #cbd5e1; }
        .map-frame-url { font-size: .75rem; color: #64748b; font-family: monospace; }
        .map-frame-outer-corp iframe {
          width: 100%; height: 750px; border: none; display: block;
        }
        .map-footer-corp {
          text-align: center; margin-top: 30px; font-size: .85rem; color: #64748b;
        }
      </style>

  <div class="map-section-wrap">
    <div class="map-hero-corp">
      <!-- Section Label Removed -->
      <h1 data-i18n="map_title">MAPA INTERACTIVO DE CONCESIONES</h1>
      <p data-i18n="map_sub">Seguimiento geoespacial de plantas solares a nivel global con indicadores técnicos y estados operativos.</p>
    </div>

    <div class="map-frame-outer-corp">
      <div class="map-frame-bar-corp">
        <span class="map-frame-dot"></span><span class="map-frame-dot"></span><span class="map-frame-dot"></span>
        <span class="map-frame-url">https://blm-mlrs.gov/interactive-map-v2</span>
      </div>
      <iframe src="map/map.html" title="Mapa Interactivo" allowfullscreen></iframe>
    </div>

    <div class="map-footer-corp" data-i18n="map_source">
      Infraestructura de datos: FIGEMPA · Procesamiento: RStudio & QGIS
    </div>
  </div>
`;

interactiveMapLink.addEventListener("click", (e) => {
  e.preventDefault();
  setPage(underConstructionCode, 'interactive-map-link');
});



/* ----------------------------
   ABOUT PROJECT
---------------------------- */
// About project
const aboutProyectCode = `
  <div class="map-hero-corp">
    <h1 data-i18n="about_intro_title">INTRODUCCIÓN AL PROYECTO</h1>
    <p data-i18n="about_intro_sub">Contexto del proyecto, planteamiento del problema, mapa geográfico y objetivos del análisis estadístico.</p>
  </div>

  <section class="problem section-box" id="problem">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="about_problem_title">PLANTEAMIENTO DEL PROBLEMA</h2>
      <div class="section-divider"></div>
    </div>
    <div style="max-width:900px; margin:0 auto;">
      <p class="problem-desc" style="font-size:1.1rem; line-height:1.8; color:#374151" data-i18n="about_problem_p1">Los arrendamientos de petróleo y gas en Kansas representan áreas donde los propietarios de tierras han arrendado derechos mineros para la exploración, perforación y producción de petróleo y gas. El análisis de esta información es importante porque permite evaluar la distribución de estas concesiones, facilitando la identificación de patrones en la ubicación de los contratos, su estado operativo y la extensión de las áreas concesionadas.</p>
      <p class="problem-desc" style="font-size:1.1rem; line-height:1.8; color:#374151; margin-top:20px;" data-i18n="about_problem_p2">
        El estudio de estos datos, aplicando metodologías y herramientas estadísticas, posibilita resumir y comparar la información existente para así detectar tendencias, analizar la concentración de los arrendamientos en el estado de Kansas y, en consecuencia, comprender mejor cómo se gestionan los recursos energéticos vinculados a estas actividades.
      </p>
    </div>
  </section>

  <section class="map-container section-box" id="map">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="about_map_title">UBICACIÓN GEOGRÁFICA</h2>
      <div class="section-divider"></div>
    </div>
    <div class="map-frame-outer-corp" style="margin-top:20px;">
      <iframe src="" class="map-iframe" style="height:600px; border:none; width:100%"></iframe>
    </div>
  </section>

  <section class="objectives section-box" id="objectives">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="about_obj_title">OBJETIVOS DEL ANÁLISIS</h2>
      <div class="section-divider"></div>
    </div>
    <div class="objectives-modern-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:30px; margin-top:40px;">
      <div class="objective-card" style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.04); border:1px solid #f1f5f9; transition: transform 0.3s ease;">
        <div style="width:60px; height:60px; background:rgba(26,79,219,0.1); border-radius:15px; display:flex; align-items:center; justify-content:center; margin-bottom:25px;">
           <i class="fas fa-bullseye" style="font-size:1.5rem; color:#1a4fdb"></i>
        </div>
        <h3 class="title-3" style="color:#001b41; margin-bottom:15px; font-size:1.3rem;" data-i18n="about_obj_gen_header">Objetivo General</h3>
        <p style="line-height:1.7; color:#475569" data-i18n="about_obj_gen_text">Aplicar la estadística y técnicas de Machine Learning para analizar los arrendamientos de petróleo y gas registrados en Kansas, mediante el uso de herramientas computacionales.</p>
      </div>
      
      <div class="objective-card" style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.04); border:1px solid #f1f5f9; transition: transform 0.3s ease;">
        <div style="width:60px; height:60px; background:rgba(14,165,233,0.1); border-radius:15px; display:flex; align-items:center; justify-content:center; margin-bottom:25px;">
           <i class="fas fa-list-check" style="font-size:1.5rem; color:#0ea5e9"></i>
        </div>
        <h3 class="title-3" style="color:#001b41; margin-bottom:15px; font-size:1.3rem;" data-i18n="about_obj_spec_header">Objetivos Específicos</h3>
        <ul style="list-style:none; padding:0; margin:0;">
          <li style="margin-bottom:12px; display:flex; align-items:start; gap:10px;">
            <i class="fas fa-check-circle" style="color:#0ea5e9; margin-top:5px; font-size:0.9rem;"></i>
            <span style="color:#475569; line-height:1.5" data-i18n="about_obj_spec_1">Conocer la situación actual de los arrendamientos de petróleo y gas en Kansas a través de sus características más importantes y medidas estadísticas.</span>
          </li>
          <li style="margin-bottom:12px; display:flex; align-items:start; gap:10px;">
            <i class="fas fa-check-circle" style="color:#0ea5e9; margin-top:5px; font-size:0.9rem;"></i>
            <span style="color:#475569; line-height:1.5" data-i18n="about_obj_spec_2">Emplear un modelo de probabilidad para establecer conclusiones sobre el estado, la extensión y la localización de los arrendamientos petroleros a partir de los resultados de muestra.</span>
          </li>
          <li style="display:flex; align-items:start; gap:10px;">
            <i class="fas fa-check-circle" style="color:#0ea5e9; margin-top:5px; font-size:0.9rem;"></i>
            <span style="color:#475569; line-height:1.5" data-i18n="about_obj_spec_3">Deducir relaciones entre variables del registro del Kansas Geological Survey con el fin de realizar estimaciones.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
`;

navlProjectLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    setPage(aboutProyectCode, 'about-proyect-link');
  })
});




/* ----------------------------
DESCRIPTIVE STATISTICS
---------------------------- */
// Descriptive Statistics parts
const dSMethodology = `
  <section class="section-box ds-methodology-section" id="ds-methodology">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="met_title">METODOLOGÍA ESTADÍSTICA</h2>
      <div class="section-divider"></div>
    </div>
        <div class="met-dashboard-grid" style="margin-top:40px;">

      <!-- Population Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #1a4fdb; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#1a4fdb; text-transform:uppercase; letter-spacing:1px;" data-i18n="pop_title">POBLACIÓN</span>
           <i class="fas fa-users-viewfinder" style="color:#1a4fdb; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="textual">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="pop_text">Todos los arrendamientos de petróleo y gas registrados en Kansas.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="symbolic">SIMBÓLICO</span>
          <div style="padding:15px; background:#f4f7fe; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#1a4fdb; border: 1px solid rgba(26,79,219,0.1);" data-i18n="pop_symbolic">
            U = {x∣x ∈ Arrendamientos ∧ Ubicación(x) ∈ Kansas}
          </div>
        </div>
      </article>

      <!-- Individual Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #0ea5e9; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#0ea5e9; text-transform:uppercase; letter-spacing:1px;" data-i18n="ind_title">INDIVIDUO</span>
           <i class="fas fa-layer-group" style="color:#0ea5e9; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="textual">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="ind_text">Cada arrendamiento de petróleo y gas registrado en la base de datos.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="symbolic">SIMBÓLICO</span>
          <div style="padding:15px; background:#eef9ff; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#0ea5e9; border: 1px solid rgba(14,165,233,0.1);" data-i18n="ind_symbolic">
            X<sub>i</sub> where i = 1, 2, 3, 4, ..., +∞
          </div>
        </div>
      </article>

      <!-- Sample Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #1a4fdb; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#1a4fdb; text-transform:uppercase; letter-spacing:1px;" data-i18n="samp_title">MUESTRA</span>
           <i class="fas fa-database" style="color:#1a4fdb; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="textual">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="samp_text">Un subconjunto representativo de arrendamientos de petróleo y gas en Kansas utilizados para el análisis estadístico del estudio.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="symbolic">SIMBÓLICO</span>
          <div style="padding:15px; background:#f4f7fe; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#1a4fdb; border: 1px solid rgba(26,79,219,0.1);" data-i18n="samp_symbolic">
            M = {x∣x ∈ Arrendamientos ∧ Sistema(x) ∈ KGS}
          </div>
        </div>
      </article>

      <!-- Case Study Card -->
      <article class="met-card" style="background:#fff; border-radius:20px; padding:30px; border-top:4px solid #0ea5e9; box-shadow:0 8px 30px rgba(0,0,0,0.03); display:flex; flex-direction:column; gap:15px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
           <span style="font-size:0.8rem; font-weight:700; color:#0ea5e9; text-transform:uppercase; letter-spacing:1px;" data-i18n="case_title">CASO DE ESTUDIO</span>
           <i class="fas fa-microscope" style="color:#0ea5e9; font-size:1.2rem;"></i>
        </div>
        <div>
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="textual">TEXTUAL</span>
          <p style="font-size:1.1rem; font-weight:600; color:#0e1726; margin:0;" data-i18n="case_text">Cada arrendamiento de petróleo y gas registrado en el dataset.</p>
        </div>
        <div style="margin-top:auto;">
          <span style="font-size:0.62rem; font-weight:800; color:#64748b; text-transform:uppercase; letter-spacing:0.12em; display:block; margin-bottom:6px;" data-i18n="symbolic">SIMBÓLICO</span>
          <div style="padding:15px; background:#eef9ff; border-radius:12px; font-family:'Fira Code', monospace; font-size:0.85rem; color:#0ea5e9; border: 1px solid rgba(14,165,233,0.1);" data-i18n="case_symbolic">
            X<sub>i</sub> donde i = 1, 2, 3, 4, ..., 47758
          </div>
        </div>
      </article>
    </div>
  </section>
`;

const dSVariablesCualitatives = `
  <div class="solutions-header" id="ds-variables">
    <span class="solutions-eyebrow" data-i18n="vars_landing_eyebrow">Categorización de Datos</span>
    <h1 class="solutions-title" data-i18n="vars_qual_title">Variables Cualitativas</h1>
    <p class="solutions-lead" data-i18n="vars_qual_lead">Clasificación de atributos no numéricos que definen la procedencia técnica y operativa.</p>
  </div>

  <h4 class="var-category-heading var-cat-nominal">
    <span class="cat-icon"><i class="fas fa-tag"></i></span>
    <span class="cat-label" data-i18n="var_cat_nom">Nominales</span>
    <span class="cat-desc" data-i18n="var_cat_nominal_desc">Sin orden jerárquico</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_produce_petr_leo">Produce Petróleo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_produce_gas">Produce Gas</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_nombre_del_operador">Nombre del Operador</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_nombre_del_campo">Nombre del Campo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_formaci_n_productora">Formación Productora</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_fuente_de_coordenadas">Fuente de Coordenadas</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_direcci_n_township">Dirección Township</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_direcci_n_range">Dirección Range</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-ordinal" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-sort-amount-up"></i></span>
    <span class="cat-label" data-i18n="var_cat_ord">Ordinales</span>
    <span class="cat-desc" data-i18n="var_cat_ordinal_desc">Con orden jerárquico definido</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Estado Operacional -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-signal" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_op_status">Estado Operacional</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Nivel de Producción -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-chart-line" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_nivel_de_producci_n">Nivel de Producción</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Nivel de Profundidad -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-arrows-up-down" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_nivel_de_profundidad">Nivel de Profundidad</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Etapa de Vida -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hourglass-half" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_etapa_de_vida">Etapa de Vida</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Nivel de Producción Promedio -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-chart-area" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_nivel_de_producci_n_promedio">Nivel de Producción Promedio</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

const dSVariablesCuantitatives = `
  <div class="solutions-header" style="margin-top:4rem;">
    <h1 class="solutions-title" data-i18n="vars_quant_title">Variables Cuantitativas</h1>
    <p class="solutions-lead" data-i18n="vars_quant_lead">Mediciones numéricas y parámetros operativos extraídos de la base de datos de arrendamientos.</p>
  </div>

  <h4 class="var-category-heading var-cat-discrete">
    <span class="cat-icon"><i class="fas fa-hashtag"></i></span>
    <span class="cat-label" data-i18n="var_cat_dis">Discretas</span>
    <span class="cat-desc">Valores enteros contables</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <!-- Identificador del Pozo -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hashtag" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_id_pozo">Identificador del Pozo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <!-- Código de Condado -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hashtag" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_c_digo_de_condado">Código de Condado</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <!-- Código de Estado -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hashtag" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_c_digo_de_estado">Código de Estado</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <!-- Años Activo -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-calendar-alt" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_a_os_activo">Años Activo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    
    <!-- Sección -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-border-all" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_secci_n">Sección</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Township -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-pin" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_township">Township</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Range -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-marked-alt" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_range">Range</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-continuous" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-wave-square"></i></span>
    <span class="cat-label" data-i18n="var_cat_con">Continuas</span>
    <span class="cat-desc">Valores numéricos en rango real</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Profundidad del Pozo -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-arrow-down-long" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_profundidad_del_pozo">Profundidad del Pozo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Producción Acumulada -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_producci_n_acumulada">Producción Acumulada</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Producción Promedio Anual -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-chart-line" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_producci_n_promedio_anual">Producción Promedio Anual</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Latitud -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-marker-alt" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_latitud">Latitud</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Longitud -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-marker-alt" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_longitud">Longitud</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

const dSVariables = `
<div class="dS-content-container" style="background:#f1f5f9; padding: 4rem 0;">
  <div class="container-corp">
    <!-- Section: Tabla de Variables -->
    <section class="section-box ds-variable-tables" id="ds-variables-tables" style="background:#fff; margin-bottom:40px; padding:3rem 3.5rem;">
      <div class="section-title-wrap">
        <h2 class="title-2" data-i18n="table_vars_title">TABLA DE VARIABLES</h2>
        <div class="section-divider"></div>
      </div>

      <!-- Professional Table Panel: Variables -->
      <div class="table-panel" style="margin-top:2rem;">
        <div class="table-panel-header">
          <div class="table-panel-header-left">
            <div class="table-panel-icon"><i class="fas fa-table"></i></div>
            <div>
              <p class="table-panel-title" data-i18n="table_panel_title_vars">Tabla de Variables</p>
              <p class="table-panel-subtitle" data-i18n="table_panel_subtitle_vars">Dataset &middot; Oil &amp; Gas Leases (KGS)</p>
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span class="table-panel-badge"><i class="fas fa-columns"></i> <span data-i18n="table_panel_badge_vars">24 Variables</span></span>
            <span class="table-panel-badge"><i class="fas fa-database"></i> <span data-i18n="table_panel_badge_kgs">KGS</span></span>
          </div>
        </div>
        <div class="table-panel-body">
          <iframe src="https://docs.google.com/spreadsheets/d/1O9ozx1I9FgdMuqNiPctb0k1kuAH9yqXg/htmlembed?widget=false&amp;headers=true&amp;chrome=false"></iframe>
        </div>
        <div class="table-panel-footer">
          <span class="table-panel-source">
            <i class="fas fa-info-circle"></i>
            <span data-i18n="table_vars_source">Fuente: Elaboración propia a partir de datos de Kansas Geological Survey (KGS), 2026.</span>
          </span>
          <a href="https://docs.google.com/spreadsheets/d/1O9ozx1I9FgdMuqNiPctb0k1kuAH9yqXg/edit?usp=drivesdk&ouid=112768017524198090146&rtpof=true&sd=true"
            target="_blank" class="table-panel-open-btn" data-i18n="open_doc">
            <i class="fas fa-external-link-alt"></i>
            Abrir Documento Completo
          </a>
        </div>
      </div>
    </section>

    <!-- Section: Tabla de Indicadores -->
    <section class="section-box ds-indicator-tables" id="ds-indicators-tables" style="background:#fff; padding:3rem 3.5rem;">
      <div class="section-title-wrap">
        <h2 class="title-2" data-i18n="table_indicators_title">TABLA DE INDICADORES</h2>
        <div class="section-divider"></div>
      </div>

      <!-- Professional Table Panel: Indicators -->
      <div class="table-panel" style="margin-top:2rem;">
        <div class="table-panel-header">
          <div class="table-panel-header-left">
            <div class="table-panel-icon"><i class="fas fa-chart-bar"></i></div>
            <div>
              <p class="table-panel-title" data-i18n="table_panel_title_inds">Tabla de Indicadores</p>
              <p class="table-panel-subtitle" data-i18n="table_panel_subtitle_inds">Indicadores estad&iacute;sticos &middot; An&aacute;lisis descriptivo</p>
            </div>
          </div>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            <span class="table-panel-badge"><i class="fas fa-chart-line"></i> <span data-i18n="table_panel_badge_stats">Estadísticos</span></span>
            <span class="table-panel-badge"><i class="fas fa-calculator"></i> <span data-i18n="table_panel_badge_desc">Descriptivos</span></span>
          </div>
        </div>
        <div class="table-panel-body">
          <iframe src="https://docs.google.com/spreadsheets/d/12MzAzHLLLVhW-RmJQG_v8BIbie809nFn/htmlembed?widget=false&amp;headers=true&amp;chrome=false"></iframe>
        </div>
        <div class="table-panel-footer">
          <span class="table-panel-source">
            <i class="fas fa-info-circle"></i><span data-i18n="table_inds_source">
            Fuente: An&aacute;lisis estad&iacute;stico del equipo FIGEMPA &middot; UCE 2026</span>
          </span>
          <a href="https://docs.google.com/spreadsheets/d/12MzAzHLLLVhW-RmJQG_v8BIbie809nFn/edit?usp=drivesdk&ouid=112768017524198090146&rtpof=true&sd=true"
            target="_blank" class="table-panel-open-btn" data-i18n="open_doc">
            <i class="fas fa-external-link-alt"></i>
            Abrir Documento Completo
          </a>
        </div>
      </div>
    </section>
  </div>
</div>

<section class="section-box is-vars-section" id="ds-vars-cards" style="background:#f1f5f9; padding: 4rem 0;">
  <div class="container-corp" style="padding-left:2.5rem; padding-right:2.5rem;">
    ${dSVariablesCualitatives}
    <div style="height:80px;"></div>
    ${dSVariablesCuantitatives}
  </div>
</section>
`;

// Descriptive Statistics (DS) section
const descriptiveStatisticsCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="ds_title">ESTADÍSTICA DESCRIPTIVA</h1>
    <p data-i18n="ds_sub">Análisis de variables, indicadores de rendimiento y métricas operativas del sector solar.</p>
  </div>

  ${dSMethodology}
  ${dSVariables}
`;

navlDSLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    setPage(descriptiveStatisticsCode, 'descriptive-statistics-link');
  })
});




/* ----------------------------
   INFERENTIAL STATISTICS
---------------------------- */
// Inferential Statistics parts
const iSCualitativesVariables = `
  <div class="solutions-header" id="is-variables">
    <span class="solutions-eyebrow" data-i18n="vars_landing_eyebrow">Categorización de Datos</span>
    <h1 class="solutions-title" data-i18n="vars_qual_title">Variables Cualitativas</h1>
    <p class="solutions-lead" data-i18n="vars_qual_lead">Clasificación de atributos no numéricos que definen la procedencia técnica y operativa.</p>
  </div>

  <h4 class="var-category-heading var-cat-nominal">
    <span class="cat-icon"><i class="fas fa-tag"></i></span>
    <span class="cat-label" data-i18n="var_cat_nom">Nominales</span>
    <span class="cat-desc" data-i18n="var_cat_nominal_desc">Sin orden jerárquico</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_produce_petr_leo">Produce Petróleo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_produce_gas">Produce Gas</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_nombre_del_operador">Nombre del Operador</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_nombre_del_campo">Nombre del Campo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_formaci_n_productora">Formación Productora</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_fuente_de_coordenadas">Fuente de Coordenadas</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_direcci_n_township">Dirección Township</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#2563eb; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-nominal" data-i18n="tag_nominal">Nominal</span>
        <h3 class="solution-card-title" data-i18n="cap_direcci_n_range">Dirección Range</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-ordinal" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-sort-amount-up"></i></span>
    <span class="cat-label" data-i18n="var_cat_ord">Ordinales</span>
    <span class="cat-desc" data-i18n="var_cat_ordinal_desc">Con orden jerárquico definido</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Estado Operacional -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-signal" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_op_status">Estado Operacional</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Nivel de Producción -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-chart-line" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_nivel_de_producci_n">Nivel de Producción</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Nivel de Profundidad -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-arrows-up-down" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_nivel_de_profundidad">Nivel de Profundidad</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Etapa de Vida -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hourglass-half" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_etapa_de_vida">Etapa de Vida</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Nivel de Producción Promedio -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-chart-area" style="font-size:3rem; color:#7c3aed; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-ordinal" data-i18n="tag_ordinal">Ordinal</span>
        <h3 class="solution-card-title" data-i18n="cap_nivel_de_producci_n_promedio">Nivel de Producción Promedio</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

const iSCuantitativesVariables = `
  <div class="solutions-header" style="margin-top:4rem;">
    <h1 class="solutions-title" data-i18n="vars_quant_title">Variables Cuantitativas</h1>
    <p class="solutions-lead" data-i18n="vars_quant_lead">Mediciones numéricas y parámetros operativos extraídos de la base de datos de arrendamientos.</p>
  </div>

  <h4 class="var-category-heading var-cat-discrete">
    <span class="cat-icon"><i class="fas fa-hashtag"></i></span>
    <span class="cat-label" data-i18n="var_cat_dis">Discretas</span>
    <span class="cat-desc">Valores enteros contables</span>
  </h4>
  <div class="vars-solutions-grid" style="margin-bottom:4rem;">
    <!-- Identificador del Pozo -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hashtag" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_id_pozo">Identificador del Pozo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <!-- Código de Condado -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hashtag" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_c_digo_de_condado">Código de Condado</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <!-- Código de Estado -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-hashtag" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_c_digo_de_estado">Código de Estado</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    <!-- Años Activo -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-calendar-alt" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_a_os_activo">Años Activo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
    
    <!-- Sección -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-border-all" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_secci_n">Sección</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Township -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-pin" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_township">Township</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Range -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-marked-alt" style="font-size:3rem; color:#0891b2; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-discrete" data-i18n="tag_discrete">Discreta</span>
        <h3 class="solution-card-title" data-i18n="cap_range">Range</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>

  <h4 class="var-category-heading var-cat-continuous" style="margin-top:2.5rem;">
    <span class="cat-icon"><i class="fas fa-wave-square"></i></span>
    <span class="cat-label" data-i18n="var_cat_con">Continuas</span>
    <span class="cat-desc">Valores numéricos en rango real</span>
  </h4>
  <div class="vars-solutions-grid">
    <!-- Profundidad del Pozo -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-arrow-down-long" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_profundidad_del_pozo">Profundidad del Pozo</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Producción Acumulada -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-database" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_producci_n_acumulada">Producción Acumulada</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Producción Promedio Anual -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-chart-line" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_producci_n_promedio_anual">Producción Promedio Anual</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Latitud -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-marker-alt" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_latitud">Latitud</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>

    <!-- Longitud -->
    <a href="#" class="solution-card">
      <div class="solution-image-container">
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#f1f5f9;">
           <i class="fas fa-map-marker-alt" style="font-size:3rem; color:#059669; opacity:0.3;"></i>
        </div>
      </div>
      <div class="solution-body">
        <span class="solution-card-tag tag-continuous" data-i18n="tag_continuous">Continua</span>
        <h3 class="solution-card-title" data-i18n="cap_longitud">Longitud</h3>
        <span class="solution-link">
          <span data-i18n="view_more">Ver Detalles</span>
          <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </a>
  </div>
`;

// Inferencial Statistics (IS) section
const inferencialStatisticsCode = `
  <div class="section-hero">
    <!-- Section Label Removed -->
    <h1 data-i18n="is_title">ESTADÍSTICA INFERENCIAL</h1>
    <p class="section-hero-sub" data-i18n="is_sub">Pruebas de hipótesis y análisis inferencial aplicado a las variables de los arrendamientos de petróleo y gas.</p>
  </div>

  <section class="section-box is-vars-section" id="is-vars" style="background:#f1f5f9; padding: 4rem 0;">
    <div class="container-corp">
       ${iSCualitativesVariables}
       <div style="height:80px;"></div>
       ${iSCuantitativesVariables}
    </div>
  </section>
`;

inferentialStatisticsLink.addEventListener("click", (e) => {
  e.preventDefault();
  setPage(underConstructionCode, 'inferential-statistics-link');
});




/* ----------------------------
   REGRESSION MODELS
---------------------------- */
const regressionModelsCode = `
  <div class="section-hero">
    <!-- Section Label Removed -->
    <h1 data-i18n="reg_models_title">MODELOS DE REGRESIÓN</h1>
    <p class="section-hero-sub" data-i18n="reg_sub">Regresiones simples (lineal, potencial, exponencial, logarítmica y polinómica) y regresión múltiple 3D entre variables del dataset.</p>
  </div>

  <section class="section-box">
    <h2 class="title-2" data-i18n="simple_reg_title">REGRESIÓN SIMPLE</h2>

    <div class="regression-rs-links-container">
      <span class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_linear">Regresión Lineal</span>
      </span>
      <span class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_potential">Regresión Potencial</span>
      </span>
      <span class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_exponential">Regresión Exponencial</span>
      </span>
      <span class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_logarithmic">Regresión Logarítmica</span>
      </span>
      <span class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_polynomial">Regresión Polinómica</span>
      </span>
    </div>
  </section>
  
  <section class="section-box">
    <h2 class="title-2" data-i18n="multiple_reg_title">REGRESIÓN MÚLTIPLE</h2>
    <div class="regression-rs-links-container">
      <span class="regression-rs-link">
        <span class="regression-link-title" data-i18n="reg_multiple_3d">Regresión Múltiple 3D</span>
      </span>
    </div>
  </section>
`;

regressionModelsLink.addEventListener("click", (e) => {
  e.preventDefault();
  setPage(underConstructionCode, 'regression-models-link');
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const machineLearningCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="ml_title">MACHINE LEARNING</h1>
    <p data-i18n="ml_sub">Modelado predictivo y clasificación de parámetros operativos mediante redes neuronales y regresión avanzada.</p>
  </div>

  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="ml_obj_title">OBJETIVO ESTRATÉGICO</h2>
      <div class="section-divider"></div>
    </div>
    <p style="font-size:1.1rem; line-height:1.7; color:#374151" data-i18n="ml_obj_text">
      Desarrollar modelos de alta precisión para la toma de decisiones informadas en proyectos de recursos energéticos.
    </p>
  </section>
  
  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="ml_method_title">METODOLOGÍA DE APRENDIZAJE</h2>
      <div class="section-divider"></div>
    </div>
    <div class="card-box" style="padding:10px; overflow:hidden; margin-top:20px;">
      <img src="https://mssarmientoo.github.io/figempa/assets/images/ml-methodology.jpeg" alt="Metodología ML" class="ml-methodology-img" style="width:100%; border-radius:8px;" />
    </div>
  </section>
  
  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="ml_model_title">DESPLIEGUE DE MODELOS</h2>
      <div class="section-divider"></div>
    </div>
    <div class="ml-models-links-container" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:30px;">
      <a href="https://colab.research.google.com/drive/1i2e8NXF8GatmiUpj8On3K3YHhbxqvRVL?usp=sharing" target="_blank" class="btn" style="text-align:center; text-decoration:none;">
        <span data-i18n="ml_notebook_reg">Notebook de Regresión</span>
      </a>
      <a href="https://colab.research.google.com/drive/1gzbUOA5vg8L-wBAeNDkolFC7Mk4O0Xdg?usp=sharing" target="_blank" class="btn" style="text-align:center; text-decoration:none; background:#001b41;">
        <span data-i18n="ml_notebook_class">Notebook de Clasificación</span>
      </a>
    </div>
  </section>
`;

machineLearningLink.addEventListener("click", (e) => {
  e.preventDefault();
  setPage(underConstructionCode, 'machine-learning-link');
});




/* ----------------------------
   MACHINE LEARNING
---------------------------- */
const toolsCode = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="tools_title">RECURSOS Y HERRAMIENTAS</h1>
    <p data-i18n="tools_sub">Ecosistema operativo para el procesamiento de datos geoespaciales y modelado estadístico.</p>
  </div>
  <section class="section-box">
    <div class="section-title-wrap">
      <h2 class="title-2" data-i18n="tools_list_title">HERRAMIENTAS UTILIZADAS</h2>
      <div class="section-divider"></div>
    </div>
    <p class="tools-description" style="max-width:900px; margin:20px auto; line-height:1.8; color:#475569; font-size:1.05rem;" data-i18n="tools_description">
      Para el desarrollo de nuestro proyecto, empleamos un ecosistema tecnológico avanzado que integra plataformas de análisis como Posit Cloud, RStudio y Google Colab, garantizando procesos de alta precisión.
    </p>
  </section>
`;

toolsLink.addEventListener("click", (e) => {
  e.preventDefault();
  setPage(toolsCode, 'tools-link');
})




/* ----------------------------
   ABOUT US
---------------------------- */
// About Us section
const aboutUsHTML = `
  <div class="map-hero-corp">
    <!-- Section Label Removed -->
    <h1 data-i18n="about_us_title">SOBRE NOSOTROS</h1>
    <p data-i18n="about_us_sub">Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental · UCE.</p>
  </div>
  <section class="section-box" style="background:#fff; border-radius:20px; padding:60px 5%; margin-top:40px; box-shadow: 0 10px 40px rgba(0,0,0,0.03);">
    <div style="max-width:800px; margin:0 auto; text-align:center;">
       <p style="font-size:1.15rem; line-height:1.9; color:#374151" data-i18n="about_p1">Somos estudiantes de Ingeniería en Petróleos de la Universidad Central del Ecuador, comprometidos con la innovación tecnológica y el análisis científico del sector energético global.</p>
       <div style="height:2px; background:linear-gradient(90deg, transparent, #1a4fdb, transparent); width:150px; margin:30px auto;"></div>
       <p style="font-size:0.95rem; color:#64748b" data-i18n="team_intro">A continuación, presentamos los CV interactivos de nuestro equipo de investigación.</p>
    </div>
    <div class="cvs-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:40px;">
      <a href="#" class="btn" target="_blank" style="font-size:0.85rem">Almeida Fernando</a>
      <a href="#" class="btn" target="_blank" style="font-size:0.85rem">Araujo Valeska</a>
      <a href="#" class="btn" target="_blank" style="font-size:0.85rem">Baldeón Ariel</a>
      <a href="#" class="btn" target="_blank" style="font-size:0.85rem">Quinchiguango Leslye</a>
    </div>
  </section>

  <section class="section-box" style="margin-top:60px; margin-bottom:60px; background:#fff; border-radius:30px; padding:50px; box-shadow: 0 20px 50px rgba(0,0,0,0.05);">
    <div style="text-align:center; margin-bottom:35px;">
        <span style="color:#1a4fdb; font-weight:700; font-size:0.9rem; letter-spacing:2px; text-transform:uppercase;" data-i18n="location_title">NUESTRA UBICACIÓN</span>
        <h2 style="font-size:2.2rem; color:#0f172a; margin-top:10px; font-weight:800;" data-i18n="location_subtitle">Facultad de Ingeniería en Geología, Minas, Petróleos y Ambiental (FIGEMPA)</h2>
        <p style="color:#64748b; margin-top:10px; font-size:1.1rem;">
            <i class="fas fa-map-marker-alt" style="color:#ef4444; margin-right:8px;"></i>
            <span data-i18n="location_address">Av. Universitaria, Quito 170129, Ecuador</span>
        </p>
    </div>
    <div style="overflow:hidden; border-radius:20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7912!2d-78.5085785!3d-0.1989508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59bc422a106a7%3A0x2280d0d6a2f4da41!2sFacultad%20de%20Ingenier%C3%ADa%20en%20Geolog%C3%ADa%2C%20Minas%2C%20Petr%C3%B3leos%20y%20Ambiental%20(FIGEMPA)%20-%20UCE!5e0!3m2!1sen!2sec!4v1711420000000!5m2!1sen!2sec" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div style="text-align:center; margin-top:30px;">
        <a href="https://maps.app.goo.gl/PGQm7XdXVJP5Tp6A6" target="_blank" class="btn" style="padding: 15px 35px; border-radius: 50px; font-weight: 600; font-size: 1rem; display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #1a4fdb, #0ea5e9); color: #fff; border:none; box-shadow: 0 10px 20px rgba(26,79,219,0.3); transition: all 0.3s ease;">
            <i class="fab fa-google"></i>
            Google Maps
        </a>
    </div>
  </section>
`;

aboutUsLink.addEventListener("click", (e) => {
  e.preventDefault();
  setPage(aboutUsHTML, 'about-us-link');
});




/* ----------------------------
   UNDER CONSTRUCTION
---------------------------- */
// Under Construction image to show for building pages
const underConstructionCode = `
  <h1 class="title-1" data-i18n="uc_title">En construcción</h1>
  <img src="assets/images/under-construction.jpg" alt="Escena de construcción" class="under-construction-img">
`;

underConstructionLinks.forEach(link => (
  link.addEventListener("click", (e) => {
    e.preventDefault();
    mainElement.setAttribute("style", `margin-top:${header.offsetHeight + 10}px`);
    mainElement.innerHTML = underConstructionCode;
    translateUI();
  })
));






/* --------------------------------
   LÓGICA DEL CHATBOT
-------------------------------- */
(function () {
  const chatbotBtn = document.getElementById('chatbotBtn');
  const chatbotModal = document.getElementById('chatbotModal');
  const closeChatbotBtn = document.getElementById('closeChatbot');
  const chatbox = document.getElementById('chatbox');
  const optionsPanel = document.getElementById('chat-options-panel');

  chatbotBtn.addEventListener('click', function () {
    const isOpen = chatbotModal.style.display === 'block';
    chatbotModal.style.display = isOpen ? 'none' : 'block';
    if (!isOpen && chatbox.children.length === 0) {
      showOptions();
    }
  });

  closeChatbotBtn.addEventListener('click', function () {
    chatbotModal.style.display = 'none';
  });

  optionsPanel.addEventListener('click', function (e) {
    const btn = e.target.closest('.chat-option-btn');
    if (btn) {
      const respKey = btn.getAttribute('data-cmd');
      const userText = btn.textContent.trim();
      if (respKey) handleBotOption(respKey, userText);
    }
  });

  function handleBotOption(respKey, userText) {
    const youLabel = (currentLang === 'es') ? 'Tú: ' : 'You: ';
    const botLabel = (currentLang === 'es') ? 'Asistente: ' : 'Assistant: ';

    // Clear previous option buttons
    optionsPanel.innerHTML = '';

    // Show user message in chatbox
    chatbox.innerHTML += `<p class="user-message">${youLabel}${userText}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;

    // Bot typing delay then response
    setTimeout(() => {
      const botResponse = translations[currentLang][respKey] || translations[currentLang]["bot_default"];
      chatbox.innerHTML += `<p class="bot-message">${botLabel}${botResponse}</p>`;
      chatbox.scrollTop = chatbox.scrollHeight;

      // Show options again after reply
      setTimeout(() => {
        showOptions(false);
      }, 800);
    }, 500);
  }

  function showOptions(showWelcome = true) {
    const options = [
      { text: translations[currentLang]["btn_intro"], cmd: "bot_resp_intro" },
      { text: translations[currentLang]["btn_vars"], cmd: "bot_resp_var" },
      { text: translations[currentLang]["nav_map"], cmd: "bot_resp_map" },
      { text: translations[currentLang]["btn_ml"], cmd: "bot_resp_ml" },
      { text: translations[currentLang]["btn_location"], cmd: "bot_resp_location" },
      { text: translations[currentLang]["btn_contact"], cmd: "bot_contact" }
    ];

    // Welcome message goes into the scrollable chatbox (only on first open)
    if (showWelcome) {
      chatbox.innerHTML = '';
      chatbox.innerHTML += `<div class="bot-msg-wrap"><p class="bot-message" style="background:#001b41; color:#fff; border-radius:15px 15px 15px 0; padding:12px 16px; margin-bottom:4px;">${translations[currentLang].bot_welcome}</p></div>`;
      chatbox.scrollTop = 0;
    }

    // Build buttons in the fixed options panel
    optionsPanel.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'chat-option-btn';
      btn.setAttribute('data-cmd', opt.cmd);
      btn.style.cssText = 'width:100%; padding:9px 12px; font-size:0.82rem; border-radius:8px; text-align:left; background:#f8fafc; color:#001b41; border:1px solid #e2e8f0; font-weight:500; cursor:pointer; transition:background .15s;';
      btn.textContent = opt.text;
      btn.addEventListener('mouseenter', () => { btn.style.background = '#eff4ff'; btn.style.borderColor = '#1a4fdb'; btn.style.color = '#1a4fdb'; });
      btn.addEventListener('mouseleave', () => { btn.style.background = '#f8fafc'; btn.style.borderColor = '#e2e8f0'; btn.style.color = '#001b41'; });
      optionsPanel.appendChild(btn);
    });
  }

  window.showOptions = showOptions;
})();

document.addEventListener("DOMContentLoaded", () => {
  translateUI();
  if (homeLink) {
    homeLink.click();
  }
});
