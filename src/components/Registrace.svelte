<script>

</script>

<div class="pozadi_registrace">
    <form>
        <p>Nová registrace</p>
        <p>Registrační údaje</p>
        <div class="osobni udaje">
            <label for="jmeno">Jméno *</label><br>
            <input type="text" id="jmeno" name="jmeno" required><br><br>
            <label for="prijmeni">Přijmení *</label><br>
            <input type="text" id="prijmeni" name="prijmeni" required><br><br>
            <label for="email">Email *</label><br>
            <input type="email" id="email" name="email" required><br><br>
            <label for="telefon">Telefoní číslo *</label><br>
            <input type="number" id="telefon" name="telefon" required><br><br>
        </div>
        <p>Přihlašovací údaje</p>
        <div>
            <label for="loginjmeno">Uživatelské jméno *<br></label>
            <input type="text" id="loginjmeno" name="loginjmeno" required><br><br>
            <label for="heslo">Heslo *</label><br>
            <input type="text" id="heslo" name="heslo" required><br><br>
        </div>
        <p>Fakturační údaje</p>
        <div>
            <label for="stat">Stát *</label><br>
            <select id="stat" name="stat">
                <option value="cz">Česká republika</option>
                <option value="svk">Slovenská republika</option>
                <option value="ger">Německo</option>
                <option value="pl">Polsko</option>
                <option value="aut">Rakousko</option>
            </select>
            <br><br>
            <label for="ulice">Ulice a č. p. *</label><br>
            <input type="text" id="ulice" name="ulice" required><br><br>
            <label for="obec">Obec *</label><br>
            <input type="text" id="obec" name="obec" required><br><br>
            <label for="psc">PSČ *</label><br>
            <input type="number" id="psc" name="psc" required><br><br>
            <label for="ucet">Číslo účtu</label><br>
            <input type="number" id="ucet" name="ucet"><br><br>
        </div>

        <p><input type="checkbox" id="souhlas" name="souhlas" value="souhlas" required>Souhlasím s použitím mých osbních údajů. Vaše osobní údaje zpracováváme pro vedení Vašeho účtu a urychlení nákupu.</p>

        <input type="submit" value="Registrovat" name="registr" id="registr">
    </form>
</div>

<style>

</style>
