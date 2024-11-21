-- Création de la fonction de notation d'une bière
CREATE OR REPLACE FUNCTION note_beer(
    user_id INT,
    beer_id INT,
    new_rating INT,
    new_comment TEXT DEFAULT NULL
)
-- La fonction retourne void (aucune valeur de retour)
RETURNS VOID AS $$
BEGIN
    -- Vérifier si l'utilisateur a déjà noté cette bière
    IF EXISTS (
        SELECT 1
        FROM Reviews
        WHERE id_user = user_id AND id_beer = beer_id
    ) THEN
        -- Si oui, mettre à jour la note et le commentaire
        UPDATE Reviews
        SET rating = new_rating,
            comment = new_comment,
            updated_at = CURRENT_TIMESTAMP
        WHERE id_user = user_id AND id_beer = beer_id;
    ELSE
        -- Sinon, insérer une nouvelle ligne
        INSERT INTO Reviews (id_user, id_beer, rating, comment, created_at, updated_at)
        VALUES (user_id, beer_id, new_rating, new_comment, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
    END IF;
END;
$$ LANGUAGE plpgsql;
