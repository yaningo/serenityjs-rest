module.exports = {
    default: `
        --publish-quiet
        --require=src/**/*.ts
        --require-module=ts-node/register
        --format=@serenity-js/cucumber
        --world-parameters={"baseApiUrl":"http://localhost:8080/webapp"}
    `,
}
