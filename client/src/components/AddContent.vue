<template>
  <div class="modal fade" id="addContent" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Content</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="addTitle">Title</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <label for="addText">Text</label>
            <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
