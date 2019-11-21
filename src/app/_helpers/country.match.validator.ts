//custom validation for country name//

export function ifCountryExists(newCountryName: string, existsCountryName: string) {
    return (group: any): {
        [key: string]: any
    } => {
        let newCountry = group.controls[newCountryName];
        let existsCountry = group.controls[existsCountryName];

        if (newCountry.value == existsCountry.value) {
            return {
                matchedCountry: true
            };
        }
    }
}