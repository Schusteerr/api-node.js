import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
    
    async list(search) {
        try {
            let videos;

            if (search) {
                videos = await sql`
                    SELECT 
                        * 
                    FROM videos
                    WHERE title ILIKE ${'%' + search + '%'}
                `;
            } else {
                videos = await sql`
                    SELECT
                        *
                    FROM videos
                `;
            }

            return videos;

        } catch (error) {
            console.error("Erro ao listar vídeos:", error);
            throw new Error("Não foi possível buscar os vídeos.");
        }
    }

    async create(video) {
        try {
            const videoID = randomUUID();
            const { title, description, duration } = video;

            await sql`
                INSERT INTO videos (id, title, description, duration) 
                VALUES (${videoID}, ${title}, ${description}, ${duration})
            `;

        } catch (error) {
            console.error("Erro ao criar vídeo:", error);
            throw new Error("Não foi possível criar o vídeo.");
        }
    }

    async update(id, video) {
        try {
            const { title, description, duration } = video;

            const result = await sql`
                UPDATE videos 
                SET 
                    title = ${title}, 
                    description = ${description}, 
                    duration = ${duration} 
                WHERE id = ${id}
                RETURNING *;
            `;

            if (result.count === 0) {
                throw new Error("Vídeo não encontrado.");
            }

        } catch (error) {
            console.error("Erro ao atualizar vídeo:", error);
            throw new Error("Não foi possível atualizar o vídeo.");
        }
    }

    async delete(id) {
        try {
            const result = await sql`
                DELETE FROM videos 
                WHERE id = ${id}
                RETURNING *;
            `;

            if (result.count === 0) {
                throw new Error("Vídeo não encontrado.");
            }

        } catch (error) {
            console.error("Erro ao deletar vídeo:", error);
            throw new Error("Não foi possível deletar o vídeo.");
        }
    }
}
