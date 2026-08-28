const seaY = 65;
const radius = 32;
const particle = 'minecraft:trial_spawner_detection_ominous';
const everyTicks = 2;
const particleCount = 220;
const particleHeight = 0.02;
const particleSpeed = 0.005;

ServerEvents.tick(event => {
    if (event.server.tickCount % everyTicks !== 0) {
        return;
    }

    event.server.runCommandSilent(
        `execute as @a at @s run particle ${particle} ` +
        `~ ${seaY} ~ ` +
        `${radius} ${particleHeight} ${radius} ` +
        `${particleSpeed} ${particleCount} force`
    );
});


PlayerEvents.loggedIn(event => {
    const player = event.player

    if (player.persistentData.firstWorldOpen) return
    player.tell(Text.of('Добро пожаловать на борт! Если ваша экспедиция пройдет успешно - можете рассчитывать на досрочное освобождение. Все дальнейшие данные будут направляться на вашу панель задач (Откройте ее, нажав кнопку "ё" или перейдя в нее из инвентаря).').green())
    player.persistentData.firstWorldOpen = true
})