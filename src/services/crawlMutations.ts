import { useMutation, useQueryClient } from "@tanstack/react-query";
import Crawl from "../interfaces/Crawl";
import { deleteCrawl, saveCrawl } from "./crawlService";
import { AxiosError } from "axios";

export function useCreateCrawl() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Crawl) => saveCrawl(data),
        onError(error, variables) {
            const axiosError = error as AxiosError;

            if (axiosError.response?.status === 409) {
                error.message = `The name ${variables.Name} is already in use. Please pick different name.`;
            }
        },
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
                return;
            }

            await queryClient.invalidateQueries({queryKey: ["crawls"] });
        }
    });
}

export function useDeleteCrawl() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteCrawl(id),
        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
                return;
            }

            await queryClient.invalidateQueries({queryKey: ["crawls"] });
        }
    });
}
