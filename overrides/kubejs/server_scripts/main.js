const seaY = 65;
const radius = 32;

const particle = 'minecraft:trial_spawner_detection_ominous';

const everyTicks = 2;
const particleCount = 220;

const particleHeight = 0.02;
const particleSpeed = 0.005;

const forceParticles = true;

ServerEvents.tick(event => {
    if (event.server.tickCount % everyTicks !== 0) {
        return;
    }

    let force = 'normal';

    if (forceParticles) {
        force = 'force';
    }

    event.server.runCommandSilent(
        `execute as @a at @s run particle ${particle} ` +
        `~ ${seaY} ~ ` +
        `${radius} ${particleHeight} ${radius} ` +
        `${particleSpeed} ${particleCount} ${force}`
    );
});