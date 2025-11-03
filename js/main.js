const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQiFXjYjAygAByVbJwIoP2gY9mdjr-_tsknfT37ki2XLs20pZ6nV1-tXeivgO5wN9ndhvsYjobjh7fU/pub?gid=1727939500&single=true&output=csv';
        const TEXTO_TOTAL = "Total Participantes";
        const UPDATE_INTERVAL = 60000;

        const escuelasInicio = [
            { filaNombre: 24, filaValor: 2 }, { filaNombre: 25, filaValor: 3 },
            { filaNombre: 26, filaValor: 4 }, { filaNombre: 27, filaValor: 5 },
            { filaNombre: 28, filaValor: 6 }, { filaNombre: 29, filaValor: 7 },
            { filaNombre: 30, filaValor: 8 }, { filaNombre: 31, filaValor: 9 },
            { filaNombre: 32, filaValor: 10 }, { filaNombre: 33, filaValor: 11 },
            { filaNombre: 34, filaValor: 12 }, { filaNombre: 35, filaValor: 13 },
            { filaNombre: 36, filaValor: 14 }, { filaNombre: 37, filaValor: 15 },
            { filaNombre: 38, filaValor: 16 }, { filaNombre: 39, filaValor: 17 },
            { filaNombre: 40, filaValor: 18 }, { filaNombre: 41, filaValor: 19 },
            { filaNombre: 42, filaValor: 20 }, { filaNombre: 43, filaValor: 21 },
            { filaNombre: 44, filaValor: 22 }
        ];

        const escuelasFIA = [
            { filaNombre: 25, filaValor: 3 }, { filaNombre: 31, filaValor: 9 },
            { filaNombre: 30, filaValor: 8 }, { filaNombre: 32, filaValor: 10 },
            { filaNombre: 33, filaValor: 11 }
        ];

        const bautizadosFIA = [
            { filaNombre: 56, filaValor: 56 }, { filaNombre: 62, filaValor: 62 },
            { filaNombre: 61, filaValor: 61 }, { filaNombre: 63, filaValor: 63 },
            { filaNombre: 64, filaValor: 64 }
        ];

        const escuelasFCE = [
            { filaNombre: 24, filaValor: 2 }, { filaNombre: 34, filaValor: 12 },
            { filaNombre: 26, filaValor: 4 }, { filaNombre: 35, filaValor: 13 }
        ];

        const bautizadosFCE = [
            { filaNombre: 55, filaValor: 55 }, { filaNombre: 65, filaValor: 65 },
            { filaNombre: 57, filaValor: 57 }, { filaNombre: 66, filaValor: 66 }
        ];


        const escuelasFACIHED = [
            { filaNombre: 36, filaValor: 14 }, { filaNombre: 39, filaValor: 17 },
            { filaNombre: 37, filaValor: 15 }, { filaNombre: 40, filaValor: 18 },
            { filaNombre: 38, filaValor: 16 }, { filaNombre: 41, filaValor: 19 }
        ];

        const bautizadosFACIHED = [
            { filaNombre: 67, filaValor: 67 }, { filaNombre: 68, filaValor: 68 },
            { filaNombre: 69, filaValor: 69 }, { filaNombre: 71, filaValor: 71 },
            { filaNombre: 70, filaValor: 70 }, { filaNombre: 72, filaValor: 72 }
        ];

        const escuelasFCS = [
            { filaNombre: 27, filaValor: 5 }, { filaNombre: 29, filaValor: 7 },
            { filaNombre: 28, filaValor: 6 }
        ];

        const bautizadosFCS = [
            { filaNombre: 58, filaValor: 58 }, { filaNombre: 59, filaValor: 59 },
            { filaNombre: 60, filaValor: 60 }
        ];


        const docentesConfig = Array.from({length: 78}, (_, i) => ({
            filaNombre: 77 + i,
            filaValor: 77 + i
        }));

        const clasesBiblicasRango = { inicio: 162, fin: 241 };
        const leccionesActualesRango = { inicio: 248, fin: 327};
        const docentesLideresRango = { inicio: 350, fin: 430 };
        const leccionActualRango = { inicio: 436, fin: 516 };

        const facultadesConfig = [
            { filaNombre: 334, filaValor: 341 },
            { filaNombre: 335, filaValor: 342 },
            { filaNombre: 336, filaValor: 343 }, 
            { filaNombre: 337, filaValor: 344 },
            { filaNombre: 338, filaValor: 345 },
        ];

        const clasesPorEscuelaConfig = [
            { filaNombre: 520, filaValor: 536 },
            { filaNombre: 521, filaValor: 537 },
            { filaNombre: 522, filaValor: 538 },
            { filaNombre: 523, filaValor: 539 },
            { filaNombre: 524, filaValor: 540 },
            { filaNombre: 525, filaValor: 541 },
            { filaNombre: 526, filaValor: 542 },
            { filaNombre: 527, filaValor: 543 },
            { filaNombre: 528, filaValor: 544 },
            { filaNombre: 529, filaValor: 545 },
            { filaNombre: 530, filaValor: 546 },
            { filaNombre: 531, filaValor: 547 },
        ];

        const colorSchemes = [
            { primary: 'rgba(52, 109, 164, 0.80)', secondary: 'rgba(90, 145, 195, 0.2)', border: 'rgba(52, 109, 164, 1)', dark: '#2c5f8d', light: 'rgba(90, 145, 195, 0.15)', nombre: 'Administración' },
            { primary: 'rgba(230, 108, 74, 0.80)', secondary: 'rgba(242, 145, 115, 0.2)', border: 'rgba(230, 108, 74, 1)', dark: '#d66642', light: 'rgba(242, 145, 115, 0.15)', nombre: 'Ingeniería Civil' },
            { primary: 'rgba(92, 184, 92, 0.80)', secondary: 'rgba(130, 205, 130, 0.2)', border: 'rgba(92, 184, 92, 1)', dark: '#5cb85c', light: 'rgba(130, 205, 130, 0.15)', nombre: 'Contabilidad' },
            { primary: 'rgba(236, 90, 130, 0.80)', secondary: 'rgba(245, 135, 165, 0.2)', border: 'rgba(236, 90, 130, 1)', dark: '#d65a82', light: 'rgba(245, 135, 165, 0.15)', nombre: 'Enfermería' },
            { primary: 'rgba(171, 94, 186, 0.80)', secondary: 'rgba(200, 135, 210, 0.2)', border: 'rgba(171, 94, 186, 1)', dark: '#9b5eba', light: 'rgba(200, 135, 210, 0.15)', nombre: 'Nutrición' },
            { primary: 'rgba(245, 145, 66, 0.80)', secondary: 'rgba(255, 175, 110, 0.2)', border: 'rgba(245, 145, 66, 1)', dark: '#e88f3e', light: 'rgba(255, 175, 110, 0.15)', nombre: 'Medicina' },
            { primary: 'rgba(52, 152, 219, 0.80)', secondary: 'rgba(100, 180, 230, 0.2)', border: 'rgba(52, 152, 219, 1)', dark: '#2c8cdb', light: 'rgba(100, 180, 230, 0.15)', nombre: 'Sistemas' },
            { primary: 'rgba(142, 88, 193, 0.80)', secondary: 'rgba(175, 130, 210, 0.2)', border: 'rgba(142, 88, 193, 1)', dark: '#8e58c1', light: 'rgba(175, 130, 210, 0.15)', nombre: 'Arquitectura' },
            { primary: 'rgba(54, 162, 150, 0.80)', secondary: 'rgba(100, 190, 180, 0.2)', border: 'rgba(54, 162, 150, 1)', dark: '#36a296', light: 'rgba(100, 190, 180, 0.15)', nombre: 'Ambiental' },
            { primary: 'rgba(150, 111, 97, 0.80)', secondary: 'rgba(180, 145, 130, 0.2)', border: 'rgba(150, 111, 97, 1)', dark: '#966f61', light: 'rgba(180, 145, 130, 0.15)', nombre: 'Industrias' },
            { primary: 'rgba(71, 133, 214, 0.80)', secondary: 'rgba(115, 165, 230, 0.2)', border: 'rgba(71, 133, 214, 1)', dark: '#4785d6', light: 'rgba(115, 165, 230, 0.15)', nombre: 'Educación' },
            { primary: 'rgba(185, 195, 85, 0.80)', secondary: 'rgba(210, 215, 130, 0.2)', border: 'rgba(165, 175, 65, 1)', dark: '#a5af41', light: 'rgba(210, 215, 130, 0.15)', nombre: 'Derecho' },
            { primary: 'rgba(242, 113, 82, 0.80)', secondary: 'rgba(250, 150, 125, 0.2)', border: 'rgba(242, 113, 82, 1)', dark: '#e26e4e', light: 'rgba(250, 150, 125, 0.15)', nombre: 'Teología' },
            { primary: 'rgba(108, 140, 158, 0.80)', secondary: 'rgba(145, 170, 185, 0.2)', border: 'rgba(108, 140, 158, 1)', dark: '#6c8c9e', light: 'rgba(145, 170, 185, 0.15)', nombre: 'Psicología' },
            { primary: 'rgba(231, 98, 88, 0.80)', secondary: 'rgba(242, 140, 130, 0.2)', border: 'rgba(231, 98, 88, 1)', dark: '#d76256', light: 'rgba(242, 140, 130, 0.15)', nombre: 'Alimentos' },
            { primary: 'rgba(54, 185, 204, 0.80)', secondary: 'rgba(100, 210, 225, 0.2)', border: 'rgba(54, 185, 204, 1)', dark: '#36b9cc', light: 'rgba(100, 210, 225, 0.15)', nombre: 'Mecatrónica' },
            { primary: 'rgba(126, 195, 92, 0.80)', secondary: 'rgba(165, 215, 135, 0.2)', border: 'rgba(126, 195, 92, 1)', dark: '#7ec35c', light: 'rgba(165, 215, 135, 0.15)', nombre: 'Agroindustrial' },
            { primary: 'rgba(245, 183, 66, 0.80)', secondary: 'rgba(255, 210, 120, 0.2)', border: 'rgba(245, 183, 66, 1)', dark: '#e8b742', light: 'rgba(255, 210, 120, 0.15)', nombre: 'Marketing' },
            { primary: 'rgba(87, 106, 192, 0.80)', secondary: 'rgba(130, 145, 210, 0.2)', border: 'rgba(87, 106, 192, 1)', dark: '#576ac0', light: 'rgba(130, 145, 210, 0.15)', nombre: 'Comunicación' },
            { primary: 'rgba(236, 90, 145, 0.80)', secondary: 'rgba(245, 135, 180, 0.2)', border: 'rgba(236, 90, 145, 1)', dark: '#d65a91', light: 'rgba(245, 135, 180, 0.15)', nombre: 'Traducción' },
            { primary: 'rgba(54, 150, 140, 0.80)', secondary: 'rgba(100, 180, 170, 0.2)', border: 'rgba(54, 150, 140, 1)', dark: '#36968c', light: 'rgba(100, 180, 170, 0.15)', nombre: 'Turismo' }
        ];

        const facultades = {
            INICIO: { nombre: "Asistentes por escuelas", escuelas: escuelasInicio },
            FIA: { nombre: "Facultad de Ingeniería y Arquitectura", escuelas: escuelasFIA, bautizados: bautizadosFIA },
            FCE: { nombre: "Facultad de Ciencias Empresariales", escuelas: escuelasFCE, bautizados: bautizadosFCE },
            FACIHED: { nombre: "Facultad de Ciencias Humanas, Educación y Derecho", escuelas: escuelasFACIHED, bautizados: bautizadosFACIHED },
            FCS: { nombre: "Facultad de Ciencias de la Salud", escuelas: escuelasFCS, bautizados: bautizadosFCS }
        };

        let currentFaculty = 'INICIO';
        let dataCache = null;
        let chartInstances = {};
        let updateTimer = null;

        function obtenerDocentes(dataCache) {
            const docentes = [];
            docentesConfig.forEach(config => {
                const nombre = dataCache[config.filaNombre - 1]?.[0]?.trim();
                if (nombre && nombre !== '') {
                    docentes.push({ nombre });
                }
            });
            return docentes;
        }

        function obtenerClasesBiblicas(dataCache) {
            const clases = [];
            for (let i = clasesBiblicasRango.inicio; i <= clasesBiblicasRango.fin; i++) {
                if (dataCache[i - 1]?.[0]) {
                    clases.push(dataCache[i - 1][0].trim());
                }
            }
            return clases;
        }

        function obtenerLecciones(dataCache) {
            const lecciones = [];
            for (let i = leccionesActualesRango.inicio; i <= leccionesActualesRango.fin; i++) {
                if (dataCache[i - 1]?.[0]) {
                    lecciones.push(dataCache[i - 1][0].trim());
                }
            }
            return lecciones;
        }

        function obtenerDocentesLideres(dataCache) {
            const docentes = [];
            for (let i = docentesLideresRango.inicio; i <= docentesLideresRango.fin; i++) {
                if (dataCache[i - 1]?.[0]) {
                    docentes.push(dataCache[i - 1][0].trim());
                } else {
                    docentes.push('');
                }
            }
            return docentes;
        }

        function obtenerLeccionesActuales(dataCache) {
            const lecciones = [];
            for (let i = leccionActualRango.inicio; i <= leccionActualRango.fin; i++) {
                if (dataCache[i - 1]?.[0]) {
                    lecciones.push(dataCache[i - 1][0].trim());
                } else {
                    lecciones.push('');
                }
            }
            return lecciones;
        }

        function obtenerFacultades(dataCache) {
            const facultades = [];
            facultadesConfig.forEach(config => {
                const nombre = dataCache[config.filaNombre - 1]?.[0]?.trim();
                const cantidad = dataCache[config.filaValor - 1]?.[0]?.trim() || '0';
                if (nombre && nombre !== '') {
                    facultades.push({
                        nombre,
                        cantidad,
                        valor: parseFloat(cantidad) || 0
                    });
                }
            });
            return facultades;
        }

        function obtenerClasesPorEscuela(dataCache) {
            const clases = [];
            clasesPorEscuelaConfig.forEach(config => {
                const nombre = dataCache[config.filaNombre - 1]?.[0]?.trim();
                const cantidad = dataCache[config.filaValor - 1]?.[0]?.trim() || '0';
                if (nombre && nombre !== '') {
                    clases.push({
                        nombre,
                        cantidad,
                        valor: parseFloat(cantidad) || 0
                    });
                }
            });
            return clases;
        }

        function updateHeaderStats() {
            if (!dataCache) return;

            const escuelasData = escuelasInicio.map(esc => {
                const valor = dataCache[esc.filaValor - 1]?.[0]?.trim() || '0';
                return parseFloat(valor) || 0;
            });
            const totalStudents = escuelasData.reduce((sum, val) => sum + val, 0);
            
            const docentes = obtenerDocentes(dataCache);
            const clases = obtenerClasesBiblicas(dataCache);

            document.getElementById('totalStudents').textContent = totalStudents;
            document.getElementById('totalTeachers').textContent = docentes.length;
            document.getElementById('totalClasses').textContent = clases.filter(c => c).length;
        }

        function updateLastUpdateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('es-PE', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
            });
            document.getElementById('lastUpdateTime').textContent = `Última actualización: ${timeString}`;
        }

        function showNotification(message) {
            const existing = document.querySelector('.notification');
            if (existing) existing.remove();

            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = `
                <i class="fas fa-check-circle notification-icon"></i>
                <span class="notification-text">${message}</span>
            `;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease-out reverse';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        async function loadData(showNotif = false) {
            try {
                const resp = await fetch(SHEET_URL + '&t=' + new Date().getTime());
                const text = await resp.text();
                const rows = text.trim().split('\n').map(r => r.split(','));
                dataCache = rows;
                updateHeaderStats();
                updateLastUpdateTime();
                if (showNotif) {
                    showNotification('Datos actualizados correctamente');
                }
                return true;
            } catch (error) {
                console.error('Error al cargar datos:', error);
                return false;
            }
        }

        function createChart(canvasId, valor, nombre, colorScheme) {
            const ctx = document.getElementById(canvasId);
            if (!ctx) return;

            if (chartInstances[canvasId]) {
                chartInstances[canvasId].destroy();
            }

            const numericValue = parseFloat(valor) || 0;
            const max = 300;

            chartInstances[canvasId] = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [nombre, 'Restante'],
                    datasets: [{
                        data: [numericValue, Math.max(0, max - numericValue)],
                        backgroundColor: [colorScheme.primary, colorScheme.secondary],
                        borderColor: [colorScheme.border, 'rgba(220, 220, 220, 0.5)'],
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleFont: { size: 14, weight: 'bold' },
                            bodyFont: { size: 13 },
                            callbacks: {
                                label: function(context) {
                                    if (context.dataIndex === 0) {
                                        return 'Valor: ' + context.parsed + ' de ' + max;
                                    }
                                    return null;
                                }
                            }
                        }
                    },
                    cutout: '72%'
                }
            });
        }

        function renderFaculty(facKey) {
            if (!dataCache) return;

            const faculty = facultades[facKey];
            const grid = document.getElementById('grid');
            document.getElementById('faculty-title').textContent = faculty.nombre;
            grid.innerHTML = '';

            Object.keys(chartInstances).forEach(key => {
                if (chartInstances[key]) chartInstances[key].destroy();
            });
            chartInstances = {};

            const escuelasConDatos = faculty.escuelas.map(esc => {
                const nombre = dataCache[esc.filaNombre - 1]?.[0]?.trim() || 'Sin nombre';
                const valor = dataCache[esc.filaValor - 1]?.[0]?.trim() || '0';
                return { nombre, valor, filaNombre: esc.filaNombre, filaValor: esc.filaValor };
            }).filter(esc => esc.nombre !== 'Sin nombre' && esc.nombre !== '');

            if (facKey === 'INICIO') {
                renderInicio(grid, escuelasConDatos);
            } else {
                renderFacultad(grid, faculty, escuelasConDatos, facKey);
            }
        }

        function renderInicio(grid, escuelasConDatos) {
            const canvasId = 'chart-inicio-consolidado';
            const labels = [];
            const valores = [];
            const backgroundColors = [];
            const borderColors = [];
            let totalBautizados = 0;

            escuelasConDatos.forEach((esc, index) => {
                const valor = parseFloat(esc.valor) || 0;
                const colorScheme = colorSchemes[index % colorSchemes.length];
                labels.push(esc.nombre);
                valores.push(valor);
                backgroundColors.push(colorScheme.primary);
                borderColors.push(colorScheme.border);
                totalBautizados += valor;
            });

            const box = document.createElement('div');
            box.style.gridColumn = '1 / -1';
            
            box.innerHTML = `
                <div class="overview-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-chart-pie"></i></div>
                        <div class="section-title">Vista General de Alumnos Participantes</div>
                    </div>
                    <div style="display: flex; gap: 40px; margin-bottom: 30px; flex-wrap: wrap; justify-content: center; align-items: flex-start;">
                        <div style="flex: 0 0 450px; min-width: 350px; max-width: 450px;">
                            <div style="background: white; border-radius: 16px; padding: 30px; border: 2px solid #e9ecef; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                                <canvas id="${canvasId}" style="max-height: 380px;"></canvas>
                            </div>
                            <div style="margin-top: 25px; text-align: center; background: linear-gradient(135deg, #003865 0%, #0077cc 100%); padding: 30px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,56,101,0.3);">
                                <div style="font-size: 56px; font-weight: 800; color: white;">${totalBautizados}</div>
                                <div style="font-size: 13px; color: rgba(255,255,255,0.9); text-transform: uppercase; font-weight: 600; letter-spacing: 1px; margin-top: 8px;">${TEXTO_TOTAL}</div>
                            </div>
                        </div>
                        <div style="flex: 1; min-width: 350px; max-width: 800px;">
                            <div class="legend-grid">
                                ${escuelasConDatos.map((esc, index) => {
                                    const colorScheme = colorSchemes[index % colorSchemes.length];
                                    return `
                                        <div class="legend-item" style="--item-color: ${colorScheme.border};">
                                            <div class="legend-color"></div>
                                            <span class="legend-name">${esc.nombre}</span>
                                            <span class="legend-value">${esc.valor}</span>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overview-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-university"></i></div>
                        <div class="section-title">Alumnos Bautizados por Facultad</div>
                    </div>
                    <div class="legend-grid">
                        ${(() => {
                            const facultadesData = obtenerFacultades(dataCache);
                            return facultadesData.map((fac, index) => {
                                const colorScheme = colorSchemes[index % colorSchemes.length];
                                return `
                                    <div class="legend-item" style="--item-color: ${colorScheme.border};">
                                        <div class="legend-color"></div>
                                        <span class="legend-name">${fac.nombre}</span>
                                        <span class="legend-value">${fac.cantidad}</span>
                                    </div>
                                `;
                            }).join('');
                        })()}
                    </div>
                    <div style="text-align: center; margin-top: 25px; background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%); padding: 30px; border-radius: 16px; border: 3px solid #003865;">
                        <div style="font-size: 48px; font-weight: 800; color: #003865;">${(() => {
                            const facultadesData = obtenerFacultades(dataCache);
                            return facultadesData.reduce((sum, fac) => sum + fac.valor, 0);
                        })()}</div>
                        <div style="font-size: 13px; color: #6c757d; text-transform: uppercase; font-weight: 600; letter-spacing: 1px; margin-top: 8px;">Total Alumnos Bautizados</div>
                    </div>
                </div>

                <div class="overview-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-school"></i></div>
                        <div class="section-title">Clases Bíblicas por Escuela Profesional</div>
                    </div>
                    <div style="display: flex; gap: 40px; margin-bottom: 30px; flex-wrap: wrap; justify-content: center; align-items: flex-start;">
                        <div style="flex: 0 0 450px; min-width: 350px; max-width: 450px;">
                            <div style="background: white; border-radius: 16px; padding: 30px; border: 2px solid #e9ecef; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                                <canvas id="chart-clases-escuelas" style="max-height: 380px;"></canvas>
                            </div>
                            <div style="margin-top: 25px; text-align: center; background: linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%); padding: 30px; border-radius: 16px; box-shadow: 0 10px 30px rgba(156,39,176,0.3);">
                                <div style="font-size: 56px; font-weight: 800; color: white;">${(() => {
                                    const clasesData = obtenerClasesPorEscuela(dataCache);
                                    return clasesData.reduce((sum, cls) => sum + cls.valor, 0);
                                })()}</div>
                                <div style="font-size: 13px; color: rgba(255,255,255,0.9); text-transform: uppercase; font-weight: 600; letter-spacing: 1px; margin-top: 8px;">Total Clases Bíblicas</div>
                            </div>
                        </div>
                        <div style="flex: 1; min-width: 350px; max-width: 800px;">
                            <div class="legend-grid">
                                ${(() => {
                                    const clasesData = obtenerClasesPorEscuela(dataCache);
                                    return clasesData.map((cls, index) => {
                                        const colorScheme = colorSchemes[index % colorSchemes.length];
                                        return `
                                            <div class="legend-item" style="--item-color: ${colorScheme.border};">
                                                <div class="legend-color"></div>
                                                <span class="legend-name">${cls.nombre}</span>
                                                <span class="legend-value">${cls.cantidad}</span>
                                            </div>
                                        `;
                                    }).join('');
                                })()}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overview-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-book-open"></i></div>
                        <div class="section-title">Clases Bíblicas y Lecciones</div>
                        <div class="section-count">${(() => obtenerClasesBiblicas(dataCache).filter(c => c).length)()} Clases</div>
                    </div>
                    <div class="clases-grid">
                        ${(() => {
                            const clasesBiblicas = obtenerClasesBiblicas(dataCache);
                            const leccionesActuales = obtenerLecciones(dataCache);
                            const docentesLideres = obtenerDocentesLideres(dataCache);
                            const leccionesActualesDetalle = obtenerLeccionesActuales(dataCache);
                            return clasesBiblicas.map((clase, i) => {
                                const leccion = leccionesActuales[i] || '';
                                const docente = docentesLideres[i] || 'No asignado';
                                const leccionActual = leccionesActualesDetalle[i] || 'Sin lección';
                                if (clase || leccion) {
                                    return `
                                        <div class="clase-card">
                                            <div class="clase-tooltip">
                                                <div class="tooltip-row">
                                                    <div class="tooltip-label"><i class="fas fa-chalkboard-teacher"></i> Docente Líder</div>
                                                    <div class="tooltip-value">${docente}</div>
                                                </div>
                                                <div class="tooltip-row">
                                                    <div class="tooltip-label"><i class="fas fa-book-reader"></i> Lección Actual</div>
                                                    <div class="tooltip-value">${leccionActual}</div>
                                                </div>
                                            </div>
                                            <div class="clase-number">${i + 1}</div>
                                            <div class="clase-name">${clase || '—'}</div>
                                            <div class="clase-leccion">${leccion || '—'}</div>
                                        </div>
                                    `;
                                }
                                return '';
                            }).join('');
                        })()}
                    </div>
                </div>

                <div class="overview-section">
                    <div class="section-header">
                        <div class="section-icon"><i class="fas fa-chalkboard-teacher"></i></div>
                        <div class="section-title">Docentes Participantes</div>
                        <div class="section-count">${(() => obtenerDocentes(dataCache).length)()} Docentes</div>
                    </div>
                    <div class="docentes-grid">
                        ${(() => {
                            const docentes = obtenerDocentes(dataCache);
                            return docentes.map((docente, index) => `
                                <div class="docente-card">
                                    <div class="docente-number">${index + 1}</div>
                                    <div class="docente-name">${docente.nombre}</div>
                                </div>
                            `).join('');
                        })()}
                    </div>
                </div>
            `;
            
            grid.appendChild(box);

            setTimeout(() => {
                const ctx = document.getElementById(canvasId);
                if (!ctx) return;

                chartInstances[canvasId] = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: valores,
                            backgroundColor: backgroundColors,
                            borderColor: borderColors,
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: true,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                padding: 12,
                                titleFont: { size: 14, weight: 'bold' },
                                bodyFont: { size: 13 },
                                callbacks: {
                                    label: function(context) {
                                        const label = context.label || '';
                                        const value = context.parsed;
                                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                        const percentage = ((value / total) * 100).toFixed(1);
                                        return `${label}: ${value} (${percentage}%)`;
                                    }
                                }
                            }
                        },
                        cutout: '65%'
                    }
                });

                // Gráfica de Clases por Escuela
                const ctxClases = document.getElementById('chart-clases-escuelas');
                if (ctxClases) {
                    const clasesData = obtenerClasesPorEscuela(dataCache);
                    const labelsClases = clasesData.map(cls => cls.nombre);
                    const valoresClases = clasesData.map(cls => cls.valor);
                    const backgroundColorsClases = clasesData.map((_, i) => colorSchemes[i % colorSchemes.length].primary);
                    const borderColorsClases = clasesData.map((_, i) => colorSchemes[i % colorSchemes.length].border);

                    chartInstances['chart-clases-escuelas'] = new Chart(ctxClases, {
                        type: 'bar',
                        data: {
                            labels: labelsClases,
                            datasets: [{
                                label: 'Clases Bíblicas',
                                data: valoresClases,
                                backgroundColor: backgroundColorsClases,
                                borderColor: borderColorsClases,
                                borderWidth: 2,
                                borderRadius: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    padding: 12,
                                    titleFont: { size: 14, weight: 'bold' },
                                    bodyFont: { size: 13 },
                                    callbacks: {
                                        label: function(context) {
                                            const value = context.parsed.y;
                                            const total = valoresClases.reduce((a, b) => a + b, 0);
                                            if (total > 0) {
                                                const percentage = ((value / total) * 100).toFixed(1);
                                                return `Clases: ${value} (${percentage}%)`;
                                            }
                                            return `Clases: ${value}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        stepSize: 1,
                                        font: { weight: 'bold' }
                                    },
                                    grid: {
                                        color: 'rgba(0, 0, 0, 0.05)'
                                    }
                                },
                                x: {
                                    ticks: {
                                        font: { weight: 'bold', size: 11 },
                                        maxRotation: 45,
                                        minRotation: 45
                                    },
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }
                    });
                }
            }, 50);
        }

        function renderFacultad(grid, faculty, escuelasConDatos, facKey) {
            if (faculty.bautizados && faculty.bautizados.length > 0) {
                const bautizadosConDatos = faculty.bautizados.map(baut => {
                    const nombre = dataCache[baut.filaNombre - 1]?.[1]?.trim() || 'Sin nombre';
                    const valor = dataCache[baut.filaValor - 1]?.[0]?.trim() || '0';
                    return { nombre, valor };
                });

                const bautizadosSection = document.createElement('div');
                bautizadosSection.style.gridColumn = '1 / -1';
                bautizadosSection.style.marginBottom = '30px';

                const canvasBautizadosId = `chart-bautizados-${facKey}`;
                const labels = [];
                const valores = [];
                const backgroundColors = [];
                const borderColors = [];
                let totalBautizados = 0;

                bautizadosConDatos.forEach((baut, index) => {
                    const valor = parseFloat(baut.valor) || 0;
                    const colorScheme = colorSchemes[(index + 4) % colorSchemes.length];
                    labels.push(baut.nombre !== 'Sin nombre' ? baut.nombre : `Escuela ${index + 1}`);
                    valores.push(valor);
                    backgroundColors.push(colorScheme.primary);
                    borderColors.push(colorScheme.border);
                    totalBautizados += valor;
                });

                bautizadosSection.innerHTML = `
                    <div class="overview-section">
                        <div class="section-header">
                            <div class="section-icon"><i class="fas fa-certificate"></i></div>
                            <div class="section-title">Alumnos Bautizados por Escuela</div>
                            <div class="section-count">${totalBautizados} Total</div>
                        </div>
                        <div style="display: flex; gap: 30px; align-items: center; justify-content: center; flex-wrap: wrap; max-width: 1400px; margin: 0 auto;">
                            <div style="flex: 0 0 400px; min-width: 300px;">
                                <div style="background: white; border-radius: 16px; padding: 20px; border: 2px solid #e9ecef;">
                                    <canvas id="${canvasBautizadosId}" style="max-height: 350px;"></canvas>
                                </div>
                                <div style="margin-top: 20px; text-align: center; background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 25px; border-radius: 16px; box-shadow: 0 10px 30px rgba(16,185,129,0.3);">
                                    <div style="font-size: 56px; font-weight: 800; color: white;">${totalBautizados}</div>
                                    <div style="font-size: 13px; color: rgba(255,255,255,0.9); text-transform: uppercase; font-weight: 600; letter-spacing: 1px; margin-top: 8px;">Total Bautizados</div>
                                </div>
                            </div>
                            <div style="flex: 1; min-width: 300px; max-width: 700px;">
                                <div class="legend-grid">
                                    ${bautizadosConDatos.map((baut, index) => {
                                        const colorScheme = colorSchemes[(index + 4) % colorSchemes.length];
                                        const nombreMostrar = baut.nombre !== 'Sin nombre' ? baut.nombre : `Escuela ${index + 1}`;
                                        const valorMostrar = parseFloat(baut.valor) || 0;
                                        return `
                                            <div class="legend-item" style="--item-color: ${colorScheme.border};">
                                                <div class="legend-color"></div>
                                                <span class="legend-name">${nombreMostrar}</span>
                                                <span class="legend-value">${valorMostrar}</span>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                grid.appendChild(bautizadosSection);

                setTimeout(() => {
                    const ctx = document.getElementById(canvasBautizadosId);
                    if (!ctx) return;

                    chartInstances[canvasBautizadosId] = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Bautizados',
                                data: valores,
                                backgroundColor: backgroundColors,
                                borderColor: borderColors,
                                borderWidth: 2,
                                borderRadius: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    padding: 12,
                                    titleFont: { size: 14, weight: 'bold' },
                                    bodyFont: { size: 13 },
                                    callbacks: {
                                        label: function(context) {
                                            const value = context.parsed.y;
                                            const total = valores.reduce((a, b) => a + b, 0);
                                            if (total > 0) {
                                                const percentage = ((value / total) * 100).toFixed(1);
                                                return `Bautizados: ${value} (${percentage}%)`;
                                            }
                                            return `Bautizados: ${value}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    ticks: {
                                        stepSize: 1,
                                        font: { weight: 'bold' }
                                    },
                                    grid: {
                                        color: 'rgba(0, 0, 0, 0.05)'
                                    }
                                },
                                x: {
                                    ticks: {
                                        font: { weight: 'bold', size: 11 },
                                        maxRotation: 45,
                                        minRotation: 45
                                    },
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }
                    });
                }, 50);
            }

            escuelasConDatos.forEach((esc, index) => {
                const canvasId = `chart-${facKey}-${index}`;
                const colorScheme = colorSchemes[index % colorSchemes.length];
                
                const box = document.createElement('div');
                box.className = 'chart-box';
                box.style.setProperty('--chart-color', colorScheme.border);
                box.style.setProperty('--chart-color-dark', colorScheme.dark);
                box.style.setProperty('--chart-color-light', colorScheme.light);
                
                const valorNumerico = parseFloat(esc.valor) || 0;
                
                box.innerHTML = `
                    <div class="chart-header">
                        <div class="chart-title">${esc.nombre}</div>
                        <div class="chart-badge"><i class="fas fa-users"></i> ${valorNumerico}</div>
                    </div>
                    <div class="chart-content">
                        <div class="chart-image-container">
                            <canvas id="${canvasId}" class="chart-canvas"></canvas>
                        </div>
                        <div class="chart-value-display">
                            <span class="chart-value-number">${valorNumerico}</span>
                            <span class="chart-value-label">Participantes</span>
                        </div>
                    </div>
                `;
                
                grid.appendChild(box);
                setTimeout(() => createChart(canvasId, valorNumerico, esc.nombre, colorScheme), 50);
            });
        }

        function mostrarFacultad(facKey, event) {
            document.querySelectorAll('.faculty-btn').forEach(btn => btn.classList.remove('active'));
            event.target.closest('.faculty-btn').classList.add('active');
            currentFaculty = facKey;
            renderFaculty(facKey);
        }

        async function init() {
            document.getElementById('loadingOverlay').classList.remove('hidden');
            
            const success = await loadData();
            
            if (success) {
                const desired = window.DESIRED_FACULTY || 'INICIO';
                renderFaculty(desired);
                currentFaculty = desired;

                updateTimer = setInterval(async () => {
                    await loadData(true);
                    renderFaculty(currentFaculty);
                }, UPDATE_INTERVAL);
            }
            
            setTimeout(() => {
                document.getElementById('loadingOverlay').classList.add('hidden');
            }, 500);
        }

        document.addEventListener('DOMContentLoaded', init);

        window.onbeforeunload = () => {
            if (updateTimer) clearInterval(updateTimer);
        };
