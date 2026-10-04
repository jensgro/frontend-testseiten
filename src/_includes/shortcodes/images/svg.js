const svg = async (icon, modificator = false) => {
    if (modificator) {
        return `<svg class="svg-icon ${modificator}"><use xlink:href="#${icon}"></use></svg>`;
    }

    return `<svg class="svg-icon"><use xlink:href="#${icon}"></use></svg>`;
};

module.exports = svg;