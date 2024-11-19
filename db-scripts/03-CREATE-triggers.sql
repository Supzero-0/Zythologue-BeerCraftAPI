-- Création de la fonction de validation de l'ABV
CREATE OR REPLACE FUNCTION validate_abv()
-- La fonction retourne un déclencheur (TRIGGER)
RETURNS TRIGGER AS $$
BEGIN
    -- Vérifier que l'ABV est compris entre 0 et 20
    IF NEW.abv < 0 OR NEW.abv > 20 THEN
        RAISE EXCEPTION 'ABV (taux d''alcool) doit être entre 0 et 20. Valeur fournie : %', NEW.abv;
    END IF;

    -- Si tout est correct, continuer l'opération
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Création du déclencheur
CREATE TRIGGER check_abv
BEFORE INSERT OR UPDATE ON Beers
FOR EACH ROW
EXECUTE FUNCTION validate_abv();
