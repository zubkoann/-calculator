import {
    Calc,
    AddCommand,
    SubCommand,
    DivideCommand,
    MultiplyCommand,
    SquaredCommand,
    RadicalCommand,
} from '../command/undo';

const calc = new Calc();

test('#Test addComand', function () {
    calc.execute(new AddCommand(2));
    calc.execute(new AddCommand(2));
    expect(
        calc.getCurrentValue()
    ).toBe(4);
})
test('#Test SubComand', function () {
    calc.execute(new SubCommand(2));
    expect(
        calc.getCurrentValue()
    ).toBe(2);
})

test('#Test MultiplyCommand', function () {
    calc.execute(new MultiplyCommand(10));
    expect(
        calc.getCurrentValue()
    ).toBe(20);
})
test('#Test DivideCommand', function () {
    calc.execute(new DivideCommand(2));
    expect(
        calc.getCurrentValue()
    ).toBe(10);
})

test('#Test SquaredCommand', function () {
    calc.execute(new SquaredCommand(calc.getCurrentValue()));
    expect(
        calc.getCurrentValue()
    ).toBe(100);
})
test('#Test RadicalCommand', function () {
    calc.execute(new RadicalCommand(calc.getCurrentValue()));
    expect(
        calc.getCurrentValue()
    ).toBe(10);
})

