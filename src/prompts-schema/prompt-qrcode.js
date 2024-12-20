import chalk from "chalk";

const PromptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code")
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolhal entre o tipo de QRcode 1) - NORMAL ou 2) - TERMINAL"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
];


export default PromptQRCode;