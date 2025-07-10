define([
    'base/js/namespace'
], function(Jupyter) {
    "use strict";

    // Set line numbers to true for all new code cells
    Jupyter.Cell.options_default.cm_config.lineNumbers = true;

    // Also apply to existing code cells when the notebook loads
    Jupyter.notebook.get_cells().forEach(function(cell) {
        if (cell.cell_type === 'code') {
            cell.code_mirror.setOption('lineNumbers', true);
        }
    });

    console.log('custom.js loaded: Line numbers enabled by default.');
});
