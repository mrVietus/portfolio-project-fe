import { useMutation, useQueryClient } from "@tanstack/react-query";
import Crawl from "../interfaces/Crawl";
import { deleteCrawl, saveCrawl } from "./crawlService";

export function useCreateCrawl() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Crawl) => saveCrawl(data),
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
    // const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteCrawl(id),
        onSuccess: () => {
            console.log("Removed");
        },

        onSettled: async (_, error) => {
            if (error) {
                console.log(error);
                return;
            }

            // await queryClient.invalidateQueries({queryKey: ["crawls"] }); commented as not yet used.
        }
    });
}
