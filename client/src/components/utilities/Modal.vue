<template>
    <div class="modal fade" :class="{'show':open}" tabindex="-1" role="dialog" aria-hidden="true">
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