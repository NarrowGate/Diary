<template>
    <!-- <portal to="modals" v-if="open">
        <div class="modal fade show" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <slot name="title"></slot>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="close">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="close">Close</button>
                        <button type="button" class="btn btn-primary" @click="save">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </portal> -->
      <v-row justify="center">
        <v-dialog
            v-model="open"
            persistent
            max-width="700px"
        >
            <v-card>
                <v-card-title>
                    <slot name="title"></slot>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <slot name="body"></slot>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                    >
                        <slot name="oktext"></slot>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  </v-row>
</template>

<script>
    export default {
        props:['open'],

        methods: {
            close(e) {
                e.stopPropagation();
                this.$emit('close');
            },
            save(e) {
                e.stopPropagation();
                this.$emit('commit');
            }
        }
    }
</script>

<style>

    .show {
        display: block;
    }

</style>