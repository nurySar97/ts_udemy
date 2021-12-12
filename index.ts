interface Int_Vehicle {
    name: string;
    year: number;
    isBroken: boolean;
    date?: string;
    status?: string;
    printSummary(): void;
}

interface Int_Reportable {
    summary(): string
}

const printSummary = (item: Int_Reportable): void => {
    console.log(item.summary())
}

const oldCivic: (Int_Vehicle & Int_Reportable) = {
    name: 'Civic',
    year: 2000,
    isBroken: true,
    date: new Date().toLocaleDateString(),
    status: 'Let\'s Not Run Out of Steam Just Yet',
    printSummary() {
        const _self = this as (Int_Vehicle & Int_Reportable);

        for (let i in _self) {
            const value = _self[i as keyof Int_Vehicle];
            if (typeof value !== 'function') {
                console.log(`${i}: ${value}`)
            }
        }
    },
    summary() {
        return `${this.name}'s status: ${this.status}`
    }
}

oldCivic.printSummary();
printSummary(oldCivic);